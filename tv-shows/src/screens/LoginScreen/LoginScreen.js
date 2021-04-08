import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { useHistory } from 'react-router-dom';
import { useUserStore } from "../../services/UserContext";
import loginUser from "../../services/Profiles";

const LoginScreen = () => {
  const history = useHistory();
  const [, dispatch] = useUserStore();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitForm = () => {
    onLogin(form);
  };

  const onLogin = (form) => {
    loginUser(form.username, form.password)
      .then((profile) => {
        dispatch({ loggedInUser: profile });
        history.push('/popular');
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmitForm}>
        <Form.Field>
          <label>Username:
            <input type="text" autocorrect="off" autocapitalize="none" value={form.username} name="username" placeholder="username" onChange={handleFormChange} />
          </label>
        </Form.Field>
        <Form.Field>
          <label>Password:
            <input type="password" value={form.password} name="password" placeholder="password" onChange={handleFormChange} />
          </label>
        </Form.Field>
        <Button>Login</Button>
      </Form>
    </Container>
  );
}

export default LoginScreen;