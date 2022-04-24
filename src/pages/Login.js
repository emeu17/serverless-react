import '../Form.css';
import React, { useState } from 'react';
import { baseUrl, homepage} from "../vars.js";

function Login() {
    // React hooks 
    const isScreenMounted = React.createRef();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function loginUser(credentials) {
        console.log("inside loginUser function");
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
                console.log("error");
                // this.setState({messageCont: res.errors.title});
            });
    }

    async function handleSubmit (event) {
      //Prevent page reload
      event.preventDefault();

      // console.log("HEEEJ!" + email + ", " + password );

      console.log("email and password: " + email + ", " + password);

      // try logging in and getting token
      const token = await loginUser({
          username: email,
          password: password
      });
      //
      //if success, save token in sessionStorage
      //else show message why login failed
      if (token) {
          console.log("Inside if token!");
          console.log(token);
          // this.setToken(token);
          // sessionStorage.setItem('email', JSON.stringify(email));
          // window.location.assign(`${homepage}/`);
      } else {
          console.log("felfelfel")
          // this.setState({ showMessage: true });
      }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label className="input-label">Username</label>
                <input
                    type="text"
                    className="input"
                    onChange={e => setEmail(e.target.value)}
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
