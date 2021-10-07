import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, btnGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button className={`
            ${btnGoogleSignIn ? 'google-sign-in' : ''}
            ${inverted ? 'inverted' : ''} 
            custom-button`} {...otherProps}
        >
        {otherProps.value}
        </button>
    );
}
 
export default CustomButton;