import React, { Component } from 'react';
import { ModalRoot, LoginRoot, LoginWrapper, ExitButton } from "../../styles/modal";
import { H2, P } from "../../styles/text";
import { FormRoot, FormTitle, FormBlock, FormItem, InputBlock, InputItem, InputName, Input, Submit } from "../../styles/form";

class LoginComponent extends Component {

    loginRef = React.createRef();

    componentDidMount() {
        setTimeout(() => {
            window.addEventListener("click", this.closeModal);
        }, 0);

    }
    componentWillUnmount() {
        window.removeEventListener("click", this.closeModal);
    }

    closeModal = (e) => {
        if (window !== undefined) {
            if (this.loginRef.current.contains(e.target) === false) {
                this.run();
            }
        }
    }

    run = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <ModalRoot>
                <LoginRoot>
                    <ExitButton onClick={this.run}><P>EXIT</P></ExitButton>
                    <LoginWrapper ref={this.loginRef}>
                        <FormRoot>
                            <FormTitle><H2 dark>Login Form</H2></FormTitle>
                            <FormBlock>
                                <FormItem>
                                    <InputBlock>
                                        <InputName><P dark>E-mail</P></InputName>
                                        <InputItem>
                                            <Input></Input>
                                        </InputItem>
                                    </InputBlock>
                                </FormItem>
                                <FormItem>
                                    <InputBlock>
                                        <InputName><P dark>Password</P></InputName>
                                        <InputItem>
                                            <Input></Input>
                                        </InputItem>
                                    </InputBlock>
                                </FormItem>
                                <FormItem end="true">
                                    <Submit type="submit" value="SEND" />
                                </FormItem>
                            </FormBlock>
                        </FormRoot>
                    </LoginWrapper>
                </LoginRoot>
            </ModalRoot>
        )
    }
}

export default LoginComponent;