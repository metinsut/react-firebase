import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class FirebaseComponent extends Component {

    render() {
        const { users } = this.props;
        return (
            <div>
                {
                    users && [...users].map((item, i) => (
                        <ul key={i}>
                            <li>{item.name}</li>
                            <li>{item.Age}</li>
                            <li>{item.City}</li>
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