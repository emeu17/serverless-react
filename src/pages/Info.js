import React, { useState, useEffect } from 'react';
import { baseUrl} from "../vars.js";

function Info() {
    const [message, setMessage] = useState(null);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}/v1/test`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setMessage(res.message);
            setProvider(res.provider);
        });
    }, []);


    if (!message) {
        return (
            <div>
                <h1>Welcome!</h1>
                <p>No cloud provider API is connected.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <p>This is a test page with a simple fetch to a get-route</p>
            <p>{message}</p>
        </div>
    );
}

export default Info;
