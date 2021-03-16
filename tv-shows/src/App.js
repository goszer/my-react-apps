import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PopularScreen from './screens/PopularScreen';
import TvShowDetailsScreen from './screens/TvShowDetailsScreen/TvShowDetailsScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/show/:id">
          <TvShowDetailsScreen />
        </Route>
        <Route path="/">
          <PopularScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
