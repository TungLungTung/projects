import React from 'react'
import {connect} from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from "firebase/auth"

import {signUpStart} from '../../redux/user/user.actions'

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword : '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;
        // Check xem co trung nhau khong?
        if(password !== confirmPassword) {
            // Loi~
            alert('password do not match');
            return;
        }

        signUpStart({displayName,email,password,confirmPassword})

    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name] : value});
    }


    render() {

        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>or Create new account</h2>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        required
                        label='Display Name'
                        handleChange={this.handleChange}
                        placeholder='Enter your full name'
                    />  
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        required
                        label='Your email'
                        handleChange={this.handleChange}
                        placeholder='Enter your email'
                    />  
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        required
                        label='Your password'
                        handleChange={this.handleChange}
                        placeholder='Enter your password'
                    /> 
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        required
                        label='Repeat your password'
                        handleChange={this.handleChange}
                        placeholder='Enter your password'
                    />  
                    <CustomButton type='submit' value='Create new account' />
                </form>
            </div>
        );
    };

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);