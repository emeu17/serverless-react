import '../Form.css';
import React, { useState } from 'react';
import { baseUrl, homepage} from "../vars.js";

function Login() {
    // React hooks
    const isScreenMounted = React.createRef();
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [messageCont, setMessageCont] = useState("");

    async function loginUser(credentials) {
        isScreenMounted.current = true;
        return fetch(`${baseUrl}/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            if (!isScreenMounted.current) {
                return;
            }
            // console.log(res.data.token);
            if (res.token) {
                return res.token;
            }
            // console.log("error: " + res.message );
            setShowMessage(true);
            setMessageCont(res.message);
        });
    }

    async function handleSubmit (event) {
        //Prevent page reload
        event.preventDefault();

        // console.log("user and password: " + user + ", " + password);

        // try logging in and getting token
        const token = await loginUser({
            username: user,
            password: password
        });

        //if success, save token in sessionStorage
        //else it will show message why login failed
        if (token) {
            sessionStorage.setItem('token', token);
            console.log("User: " + user);
            sessionStorage.setItem('user', user);
            window.location.assign(`${homepage}/`);
        }
    };

    const loggedinuser = sessionStorage.getItem('user');
    if (loggedinuser) {
        return (
            <div>
                <h1>Already logged in</h1>
                <p>User {loggedinuser} has already signed in.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                { showMessage &&
                    <p className="red-msg">Login failed: {messageCont}</p>
                }
                <label className="input-label">Username</label>
                <input
                    type="text"
                    className="input"
                    onChange={e => setUser(e.target.value)}
                />
                <label className="input-label">Password</label>
                <input
                    type="password"
                    className="input"
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <button type="submit" className="Reg-btn">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
