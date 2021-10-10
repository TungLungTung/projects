import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

const SignUp = ({ signUpStart }) => {

    const [userInfo, setUserInfo] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = userInfo;
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check xem co trung nhau khong?
        if (password !== confirmPassword) {
            // Loi~
            alert('password do not match');
            return;
        }

        signUpStart({ displayName, email, password, confirmPassword })

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>or Create new account</h2>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    required
                    label='Display Name'
                    handleChange={handleChange}
                    placeholder='Enter your full name'
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    required
                    label='Your email'
                    handleChange={handleChange}
                    placeholder='Enter your email'
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    required
                    label='Your password'
                    handleChange={handleChange}
                    placeholder='Enter your password'
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    required
                    label='Repeat your password'
                    handleChange={handleChange}
                    placeholder='Enter your password'
                />
                <CustomButton type='submit' value='Create new account' />
            </form>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);