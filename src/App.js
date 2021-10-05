import './App.css';

import HomePage from './pages/homepage/homepage.component';
import NotFound404 from './pages/_404/_404.component';
import ShopPage from './pages/shop/shop.components'
import { Route, Switch } from 'react-router-dom'
import Header from './components/layouts/header/header.component';
import SignInAndSignUpPage from './pages/account/auth/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
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

export default App;
