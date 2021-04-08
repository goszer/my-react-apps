import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserStoreProvider } from "./services/UserContext";

import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <UserStoreProvider>
        <App />
    </UserStoreProvider>,
    rootElement);
