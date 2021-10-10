import './App.css';

import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import NotFound404 from './pages/_404/_404.component';
import ShopPage from './pages/shop/shop.components'

import Header from './components/layouts/header/header.component';
import SignInAndSignUpPage from './pages/account/auth/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HighOrderComponent from './components/high-order-component/high-order-component.component';

import {checkUserSession} from './redux/user/user.actions'

// import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// import { onSnapshot } from "firebase/firestore";

// Redux
// import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
// Them du lieu 1 lan vao selector

const App = ({checkUserSession,currentUser}) => {

  useEffect(() => {
    checkUserSession()
  },[checkUserSession])

  return (
    <div>
      <Header />
      {/* localhost:3000/hats */}
      {/* Ben trong Switch thi khi ma match path thi chi co render 1 components thoi */}
      <Switch>
        {/* Exact la luc nao cung phai co o trang chu */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/hoc' component={HighOrderComponent} />
        <Route
          exact
          path='/signin'
          render={(props) => currentUser ?
            (<Redirect to='/' />) :
            (<SignInAndSignUpPage />)}
        />
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>

    </div>
  );

}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser,
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
