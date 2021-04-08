import {Users} from "../data/Users.js"

const loginUser = async(username, password) => {
    const foundUser = Users.find((item) => {
        return item.username === username;
    });

    if (foundUser && foundUser.password === password) {
        return foundUser;
    } else {
        throw Error("User not found or wrong password!");
    }
}

export default loginUser;