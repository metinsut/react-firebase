import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import logger from 'redux-logger';
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import 'firebase/firestore';
import firebase from 'firebase';

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
}

const firebaseConfig = {
    apiKey: "AIzaSyA00ru8sw0ucP8rcSHB_8v27cMXg71ZuTk",
    authDomain: "firestore-react.firebaseapp.com",
    databaseURL: "https://firestore-react.firebaseio.com",
    projectId: "firestore-react",
    storageBucket: "firestore-react.appspot.com",
    messagingSenderId: "115453511856"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore)

const reducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

const middleware = [thunk.withExtraArgument(getFirebase)];

const config = applyMiddleware(...middleware, logger);

const store = createStoreWithFirebase(reducers, config);

export default store;