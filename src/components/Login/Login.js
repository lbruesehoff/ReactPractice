import { useEffect, useState } from "react";
import './Login.css';
import {createUserWithEmailAndPassword,
        onAuthStateChanged,
        signInWithEmailAndPassword, 
        signOut
} from 'firebase/auth';
import { auth } from "./firebase-config";

 
const Login = () => {
    const [RegEmail, setRegEmail] = useState('');
    const [RegPassword, setRegPassword] = useState('');
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});

useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])


    const register = async () => {
        try{
        const user = await createUserWithEmailAndPassword(auth, RegEmail, RegPassword);
        setRegEmail('');
        setRegPassword('')
        console.log(user);
        } catch (error){
            console.log(error.message)
        }
    };

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
            setLoginEmail('');
            setLoginPassword('')
            console.log(user);
            } catch (error){
                console.log(error.message)
            }
    };

    const logout = async () => {
        await signOut(auth)
    };



    return (
        <div className="login">
            <h2>React and Firebase Login Authentication</h2>
            <div>
                <h3>Register User</h3>
                <input
                    value={RegEmail}
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegEmail(event.target.value)
                    }}
                
                    />
                <input
                    value={RegPassword}
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegPassword(event.target.value)
                    }}
                />
                <button onClick={register}>Sign up</button>
            </div>
            <div>
                <h3>Login User </h3>
                <input
                    value={LoginEmail}
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value)
                    }}
                />
                <input
                    value={LoginPassword}
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value)
                    }}
                />
                <button onClick={login}>Login</button>
            </div>
            <h4>User Logged In:</h4>
            <span>{user ? user.email : "Not Logged In"} </span>
            
            <button onClick={logout}>Sign Out</button>

        </div>
    );
}

export default Login;