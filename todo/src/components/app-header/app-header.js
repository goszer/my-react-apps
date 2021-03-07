import './app-header.css';

const AppHeader = () => {
    const loggedIn = false;
    const loginPrompt = <span>Please login</span>;
    const greeting = <span>You are loggen in</span>;

    return (
        <div>
            <h1>Todo Application, {new Date().toDateString()} !!!!</h1>
            {/*{loggedIn ? greeting : loginPrompt}*/}
            {loggedIn && greeting}
        </div>
    );
}

export default AppHeader;