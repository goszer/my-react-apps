import { Route } from 'react-router-dom';
import { useUserStore } from "../services/UserContext";
import { useHistory } from 'react-router-dom';

const PrivateRoute = ({ children, path }) => {
    const history = useHistory();
    const [userContext] = useUserStore();

    if (userContext.loggedInUser) {
        return (
            <Route path={path}>
                {children}
            </Route>       
        );
    } else {
        history.push('/login');
        return (<></>);
    }

};

  
export default PrivateRoute