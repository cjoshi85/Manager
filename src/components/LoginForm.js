import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChange, passwordChange, loginUser } from '../actions';
import { Card, CardItem, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    onEmailChange = (text) => {
        this.props.emailChange(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChange(text);
    }

    loginUser = () => {
        const { email, password } = this.props.auth;
        this.props.loginUser({ email, password });
    }

    renderButton = () => {
        if (this.props.auth.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.loginUser}>
                Log In
            </Button>
        );
    }

    render() {
        const { email, password, error } = this.props.auth;
        return (
            <Card>
                <CardItem>
                    <Input
                        label="Email"
                        onChangeText={this.onEmailChange}
                        placeholder="abc@example.com"
                        value={email}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={password}
                        onChangeText={this.onPasswordChange}
                    />
                </CardItem>
                <Text style={styles.textStyle}>
                    {error}
                </Text>
                <CardItem>
                   {this.renderButton()}
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
