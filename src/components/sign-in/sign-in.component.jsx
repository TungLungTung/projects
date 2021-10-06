import React from "react";
import FormInput from '../form-input/form-input.component'
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import { auth } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email,password} = this.state;
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
              })
              .catch((error) => {
                console.log(error.message)
              });
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {

        return (
            <div className="sign-in">
                <h2>or Sign in with your exist account</h2>
                <form>
                    <FormInput
                        type='text'
                        name='email'
                        value={this.state.email}
                        required
                        label='Email'
                        handleChange={this.handleChange}
                        placeholder='Enter your email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        required
                        label='Password'
                        handleChange={this.handleChange}
                        placeholder='Enter your password'
                    />
                    {/* Co the dung children props la nhung cai ben trong cua Component */}
                    <div className='sign-in-button-holder'>
                        <CustomButton onClick={this.handleSubmit} type='submit' value='Sign in' />
                        <CustomButton onClick={signInWithGoogle} value='Login with Google' btnGoogleSignIn='true' />
                    </div>
                </form>
            </div>

            // Form dang ky tai khoan o day


        )
    }

}

export default SignIn;