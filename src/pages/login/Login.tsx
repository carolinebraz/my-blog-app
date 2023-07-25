import { useState, useEffect } from 'react'

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [login, setLogin] = useState("");

    useEffect(() => {
        if (loggedIn) {
            setLogin("Welcome (:");
        }
    }, [loggedIn]);

    return (
        <>
            <button onClick={() => setLoggedIn(true)}>Log in</button>
            <h2>{login}</h2> 
        </>
    )
}

export default Login