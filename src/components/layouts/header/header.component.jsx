import { Link } from "react-router-dom";
// De su dung redux trong component
import {connect} from 'react-redux'

import './header.styles.scss'

import {ReactComponent as Logo} from '../../../assets/crown.svg'
import {auth} from '../../../firebase/firebase.utils'

const Header = ({currentUser}) => {
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
            </div>
        </div>
    );
}

// state la Root Reducer, trong do co user,
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// })

// Thay vi viet nhu tren co the viet
const mapStateToProps = (state) => {
    return ({
        currentUser: state.user.currentUser   
    })
}
 
export default connect(mapStateToProps)(Header);