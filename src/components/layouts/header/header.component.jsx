import React from 'react';
// De su dung redux trong component
import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect'


import './header.styles.scss'

import {ReactComponent as Logo} from '../../../assets/crown.svg'

import CartIcon from "../../icons/cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from '../../../redux/cart/cart.selectors'
import { selectCurrentUser} from '../../../redux/user/user.selectors'

import { signOutStart } from '../../../redux/user/user.actions';


import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            {/* Header */}
            <LogoContainer to='/'>
                <Logo className='logo'  />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ?
                null :
                (<CartDropdown />)
            }
        </HeaderContainer>
    );
}

// state la Root Reducer, trong do co user,
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// })

// Thay vi viet nhu tren co the viet
// const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => {
//     return ({
//         currentUser,
//         hidden
//     })
// }
 
// const mapStateToProps = (state) => {
//     return ({
//         currentUser : selectCurrenUser(state),
//         hidden: selectCartHidden(state)
//     })
// }

// hoac
const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);