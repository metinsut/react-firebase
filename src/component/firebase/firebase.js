import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { P } from "../../styles/text";

class FirebaseComponent extends Component {

    render() {
        const { users } = this.props;
        return (
            <div>
                {
                    users && [...users].map((item, i) => (
                        <ul key={i}>
                            <li><P dark>{item.name}</P></li>
                            <li><P dark>{item.Age}</P></li>
                            <li><P dark>{item.City}</P></li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.firestore.ordered.users ? state.firestore.ordered.users : null
    }
}

export default compose(
    firestoreConnect(['users']),
    connect(mapStateToProps)
)(FirebaseComponent)