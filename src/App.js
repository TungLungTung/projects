import './App.css';

import HomePage from './pages/homepage/homepage.component';
import NotFound404 from './pages/_404/_404.component';
import { Route, Switch } from 'react-router-dom'
import { useParams } from 'react-router'

const HatsPage = (props) => {
  // Dung nay cung dc
  const {id} = useParams();
  // Dung props cung dc
  const id1 = props.match.params.id;

  return (
    <div>
      <h1>HATS PAGE {id} {id1}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* localhost:3000/hats */}
      {/* Ben trong Switch thi khi ma match path thi chi co render 1 components thoi */}
      <Switch>
        {/* Exact la luc nao cung phai co o trang chu */}
        <Route exact path='/' component={HomePage} />
        <Route path='/hats/:id' component={HatsPage} />
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
