import styled, { css } from 'styled-components';

const buttonStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`

const invertedButtonStyles = css`
background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`

const googleSignInStyles = css`
background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`

const getButtonStyles = (props) => {
    if (props.btnGoogleSignIn) {
        return googleSignInStyles;
    }
    if (props.inverted) {
        return invertedButtonStyles;
    } else {
        return buttonStyles;
    }
}

// Base components
const CustomButtonContainer = styled.button`
    width: auto;
    letter-spacing: 0.5px;
    padding: 8px 15px 8px 15px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: inline-block;
    justify-content: center;
    margin: 0px 5px;
    border: none;

    ${getButtonStyles}

`

export default CustomButtonContainer