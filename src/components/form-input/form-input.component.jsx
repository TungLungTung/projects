import './form-input.styles.scss';

const FormInput = ({handleChange, label, placeholder, ...otherProps}) => {
    return (
        <div className='group'>
            {/* {label ? (<label className={`${otherProps.value.length} ? 'shrink' : ''`} from-input-label>{label}</label>) : null} */}
            {label ? `${label}` : ''}
            <input
                className='form-input'
                placeholder={placeholder}
                onChange={handleChange} 
                {...otherProps} />
        </div>
    );
}
 
export default FormInput;