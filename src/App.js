import './App.css';

import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import NotFound404 from './pages/_404/_404.component';
import ShopPage from './pages/shop/shop.components'
import { Route, Switch } from 'react-router-dom'
import Header from './components/layouts/header/header.component';
import SignInAndSignUpPage from './pages/account/auth/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  // De bo chon cai Auth khi thoat
  unsubscribeFromAuth = null;

  // FetchDate on Mount
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});
      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* localhost:3000/hats */}
        {/* Ben trong Switch thi khi ma match path thi chi co render 1 components thoi */}
        <Switch>
          {/* Exact la luc nao cung phai co o trang chu */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>

      </div>
    );
  }

}

export default App;
