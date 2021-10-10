import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from "../custom-button/custom-button.component";
// import { signInWithGoogle } from '../../firebase/firebase.utils.js'
// import { auth } from '../../firebase/firebase.utils'
// import { signInWithEmailAndPassword } from "firebase/auth";

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password)

        // await signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         // ...
        //         console.log(user);
        //       })
        //       .catch((error) => {
        //         console.log(error.message)
        //       });
        // this.setState({ email: '', password: '' })
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2>or Sign in with your exist account</h2>
            <form>
                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    required
                    label='Email'
                    handleChange={handleChange}
                    placeholder='Enter your email'
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    required
                    label='Password'
                    handleChange={handleChange}
                    placeholder='Enter your password'
                />
                {/* Co the dung children props la nhung cai ben trong cua Component */}
                <div className='sign-in-button-holder'>
                    <CustomButton onClick={handleSubmit} type='submit' value='Sign in' />
                    <CustomButton type='button' onClick={googleSignInStart} value='Login with Google' btnGoogleSignIn='true' />
                </div>
            </form>
        </div>

        // Form dang ky tai khoan o day


    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);