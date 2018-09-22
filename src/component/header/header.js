import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, HeaderLeft, HeaderMid, HeaderRight, StyledLink, Button } from "./headerStyle";
import { P } from "../../styles/text";
import { HOME, FIREBASE, LOGIN, SIGNUP } from "../../constant/routesPath";

class HeaderComponent extends Component {
    render() {
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
                </HeaderRight>
            </Header>
        )
    }
}

export default connect()(HeaderComponent);

