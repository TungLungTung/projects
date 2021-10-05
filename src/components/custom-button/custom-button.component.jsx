import './custom-button.styles.scss'

const CustomButton = ({children, btnGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${btnGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {otherProps.value}
        </button>
    );
}
 
export default CustomButton;