import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PopularScreen from './screens/PopularScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import TvShowDetailsScreen from './screens/TvShowDetailsScreen/TvShowDetailsScreen';
import PrivateRoute from './components/PrivateRouter';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <PrivateRoute path="/show/:id">
          <TvShowDetailsScreen />
        </PrivateRoute>
        <PrivateRoute path="/popular" >
          <PopularScreen />
        </PrivateRoute>
        <PrivateRoute path="/favorites" >
          <FavoritesScreen />
        </PrivateRoute>
        <PrivateRoute path="/" >
          <Redirect to="/popular" />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
