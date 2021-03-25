import React, { useState } from 'react';
import { CoreModule, Profile } from '@hackru/frontend-core';

const Login = CoreModule(({text, profile, children}) => {
    
    const [token, setToken] = useState("Not Logged in yet!")

    const onSubmit = async (e) => {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        // await profile.Login()
        // let test = new profile();
        console.log(email, password);
        console.log(profile);
        // test.test()
        await profile.Login(email, password);
        setToken(profile._token);
        
    };

    return (
        <div>
            <div>
                <div>
                <div>
                <h3>{text}</h3>
                </div>
                </div>
                <form>
                <input id="email" type="text" placeholder="email"/>
                <input id="password" type="password" placeholder="password"/>
                <button onClick={onSubmit}>login</button>
                </form>
            </div>
            Token: {token}
        </div>
        )
}, ["text", "profile"])

const TestLogin = CoreModule(({text, profile, children}) => {
    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(profile.isLoggedIn);
    };

    return (
        <div>
            <div>
                <button onClick={onSubmit}>{text}</button>
            </div>
        </div>
        )
}, ["text", "profile"])

const TestLogout = CoreModule(({text, profile, children}) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        // test.test()
        console.log("pre-check", profile.isLoggedIn)
        profile.Logout()
        console.log("post-check", profile.isLoggedIn)
        
    };

    return (
        <div>
            <div>
                <button onClick={onSubmit}>{text}</button>
            </div>
        </div>
        )
}, ["text", "profile"])

export { Login, TestLogin, TestLogout };
