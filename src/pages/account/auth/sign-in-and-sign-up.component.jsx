import React from 'react';
import { useState } from 'react';
import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../../components/sign-in/sign-in.component';
import SignUp from '../../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => {
    
    const [isLogin, setIsLogin] = useState(true);
    const changeIsLogInState = () => {
        setIsLogin(!isLogin)
    }
    return (
        <div className="sign-in-and-sign-up">
            {isLogin && <div><span>Click <strong onClick={changeIsLogInState} style={{textDecoration:'underline'}}>here</strong> to create and new account</span>
            <SignIn /></div>}
            {!isLogin && <div><span>If you have account, click <strong onClick={changeIsLogInState} style={{textDecoration:'underline'}}>here</strong> to log in</span>
            <SignUp /></div>}
        </div>
    );
}
 
export default SignInAndSignUpPage;