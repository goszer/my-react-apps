import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PopularScreen from './screens/PopularScreen';
import TvShowDetailScreen from "./screens/TvShowDetailScreen";

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/tvshowdetail/:id">
                <TvShowDetailScreen />
            </Route>
            <Route path="/">
                <PopularScreen />
            </Route>
        </Switch>
    </Router>
  );
};

export default App;
