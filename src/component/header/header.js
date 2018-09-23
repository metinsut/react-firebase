import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from "react-redux-firebase";
import { Header, HeaderLeft, HeaderMid, HeaderRight, StyledLink, Button } from "./headerStyle";
import { P } from "../../styles/text";
import { HOME, FIREBASE, LOGIN, SIGNUP } from "../../constant/routesPath";

class HeaderComponent extends Component {

    logOut = () => {
        this.props.firebase.logout();
        this.props.history.push("/");
    }

    render() {
        let { auth } = this.props;
        const isLogin = auth.isLoaded && !auth.isEmpty;
        return (
            <Header>
                <HeaderLeft>
                    <StyledLink to={HOME}><P>FireStore Test</P></StyledLink>
                </HeaderLeft>
                <HeaderMid>
                    <StyledLink to={HOME}><P>Home</P></StyledLink>
                    <StyledLink to={FIREBASE}><P>Firebase</P></StyledLink>
                </HeaderMid>
                <HeaderRight>
                    {isLogin === true ?
                        <Fragment>
                            <P>{auth.email}</P>
                            <Button onClick={this.logOut} second>Logout</Button>
                        </Fragment>
                        :
                        <Fragment >
                            <StyledLink
                                to={
                                    this.props.location
                                        .pathname ===
                                        "/"
                                        ? HOME + LOGIN
                                        : this.props
                                            .location
                                            .pathname +
                                        LOGIN
                                }><Button primary>Login</Button></StyledLink>
                            <StyledLink to={SIGNUP}><Button second>Sign Up</Button></StyledLink>
                        </Fragment>
                    }
                </HeaderRight>
            </Header>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default withFirebase(connect(mapStateToProps)(HeaderComponent));

