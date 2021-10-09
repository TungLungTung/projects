import './App.css';

import React from 'react';
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

// import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// import { onSnapshot } from "firebase/firestore";

// Redux
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
// Them du lieu 1 lan vao selector

class App extends React.Component {
  // De bo chon cai Auth khi thoat
  unsubscribeFromAuth = null;
  unsub = null

  // FetchDate on Mount
  componentDidMount() {

    // Redux
    const { setCurrentUser } = this.props;

    // // Kiểm tra user đăng nhập bằng Google userAuth
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   // Truong hop co ton tai
    //   if (userAuth) {
    //     // Lay userRef nhan userRef tra ve tu ham Create
    //     const userRef = await createUserProfileDocument(userAuth);
    //     // Kiem tra snapshot va ghi du lieu
    //     this.unsub = onSnapshot(userRef, (doc) => {
    //       setCurrentUser({
    //         id: doc.id,
    //         ...doc.data()
    //       }, () => {
    //         // console.log('Current User',this.state.currentUser)
    //       });
    //     });
    //   }

    //   setCurrentUser(userAuth);
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // const {currentUser} = this.state;
    // console.log(currentUser);
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
            render={(props) => this.props.currentUser ?
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

}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser,
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(
  mapStateToProps,
  mapDispatchProps
)(App);
