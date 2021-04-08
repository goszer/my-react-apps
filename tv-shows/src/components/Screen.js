import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { useUserStore } from "../services/UserContext";
import { useHistory } from 'react-router-dom';

const Screen = ({ children, header }) => {
  const history = useHistory();
  const [, dispatch] = useUserStore();
  const handleLogout = () => {
    dispatch({loggedInUser: null});
    history.push('/login');
  }

  return (
    <Container style={{ marginTop: '50px' }}>
      <Header as="h1">{header}</Header>
      <Button onClick={handleLogout}>Logout</Button>      
      <Divider />
      {children}
    </Container>
  );
};

export default Screen;