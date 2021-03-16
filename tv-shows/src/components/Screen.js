import { Container, Divider, Header } from 'semantic-ui-react';

const Screen = ({ children }) => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Header as="h1">Tv Shows</Header>
      <Divider />
      {children}
    </Container>
  );
};

export default Screen;
