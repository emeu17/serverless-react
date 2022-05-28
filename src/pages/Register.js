import '../Form.css';
import React, { useState } from 'react';
import { baseUrl, homepage} from "../vars.js";

function Register() {
    // React hooks
    const isScreenMounted = React.createRef();
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [messageCont, setMessageCont] = useState("");

    async function loginUser(credentials) {
        isScreenMounted.current = true;
        return fetch(`${baseUrl}/v1/user`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(credentials)
        })
        .then(res => {
            console.log(res);
            if (!isScreenMounted.current) {
                return;
            }
            console.log(res.status);
            setShowMessage(true);
            if (res.status == 201) {
                setMessageCont("User registered successfully")
                return;
            }

            setMessageCont("Error registering user")
            // console.log(res.data.token);
            // console.log("error: " + res.message );
        })
        .catch(error => {
            setShowMessage(true);
            setMessageCont("Error registering user")
        });
    }

    async function handleSubmit (event) {
        //Prevent page reload
        event.preventDefault();

        // console.log("user and password: " + user + ", " + password);

        // try registering user
        const token = await loginUser({
            username: user,
            password: password
        });
    };

    return (
        <div>
            <h1>Register new user</h1>
            <form onSubmit={handleSubmit}>
                { showMessage &&
                    <p> {messageCont} </p>
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
                    <button type="submit" className="Reg-btn">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
