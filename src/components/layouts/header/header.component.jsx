import { Link } from "react-router-dom";
// De su dung redux trong component
import {connect} from 'react-redux'

import './header.styles.scss'

import {ReactComponent as Logo} from '../../../assets/crown.svg'
import {auth} from '../../../firebase/firebase.utils'

import CartIcon from "../../icons/cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            {/* Header */}
            <Link className='logo-container' to='/'>
                <Logo className='logo'  />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ?
                null :
                (<CartDropdown />)
            }
        </div>
    );
}

// state la Root Reducer, trong do co user,
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// })

// Thay vi viet nhu tren co the viet
const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => {
    return ({
        currentUser,
        hidden
    })
}
 
export default connect(mapStateToProps)(Header);