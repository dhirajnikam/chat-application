import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
// eslint-disable-next-line
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));

    };
    return (
        <div className="login">
            <div className="login__container">
                <img
                src="https://cdn.pixabay.com/photo/2017/08/23/11/45/cassette-2672633_1280.png"
                alt="" 
                />
                <div className="login__text">
                    <h1>Sign in to !chat</h1>
                </div>
                <Button onClick={signIn}>
                   Sign In with Google
                </Button>
            </div>
            
        </div>
    )
}

export default Login
