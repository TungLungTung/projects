import React from 'react';
import './custom-button.styles.scss'

import CustomButtonContainer from './custom-button.styles'

// Su dung styled-components
const CustomButton = ({...props}) => {
    return (
        <CustomButtonContainer {...props}>
            {props.value}       
        </CustomButtonContainer>   
    ) 
}


// const CustomButton = ({children, btnGoogleSignIn, inverted, ...otherProps}) => {
//     return (
//         <button className={`
//             ${btnGoogleSignIn ? 'google-sign-in' : ''}
//             ${inverted ? 'inverted' : ''} 
//             custom-button`} {...otherProps}
//         >
//         {otherProps.value}
//         </button>
//     );
// }
 
export default CustomButton;