import React, { Component, Fragment } from 'react';
import { SocailBlock, Social } from "./socailBlockStyle";
import { FormItem } from "../../styles/form";
import { P } from "../../styles/text";

export class socialBlockComponent extends Component {
    render() {
        return (
            <Fragment>
                <SocailBlock>
                    <FormItem >
                        <Social bc="blue">
                            <P p="10px" color="white">Login With Facebook</P>
                        </Social>
                    </FormItem>
                    <FormItem >
                        <Social bc="red">
                            <P p="10px" color="white">Login With Google</P>
                        </Social>
                    </FormItem>
                </SocailBlock>
            </Fragment>
        )
    }
}

export default socialBlockComponent
