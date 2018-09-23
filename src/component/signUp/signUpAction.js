// import { getFirestore } from "redux-firestore";

// import firebase from "firebase";

// firebase.auth().createUserWithEmailAndPassword();

export const signUp_user = (data, callback) => (
    async (dispatch, getState, {getFirebase,getFirestore} ) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            let createUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password);
            await createUser.updatedProfile({
                displayName: data.username
            })
            let newUser = {
                displayName: data.username,
                createdAt: firestore.FieldValue.serverTimestamp()
            }
            await firestore.set(`user/${createUser.uid}`, { ...newUser })
            callback()
        } catch (error) {
            console.log(error);
        }
    }
)