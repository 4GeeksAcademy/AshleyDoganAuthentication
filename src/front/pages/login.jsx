import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGlobalReducer } from "../hooks/useGlobalReducer";
import "../../styles/home.css";


export const Login = () => {
    const {store, dispatch} =useGlobalReducer()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const handleClick = async () => {
        let result = await dispatch({ type: "handleLogin", payload: { email: email, password: password}});
        if (!result) {
            alert ("there was an error logging in")
        } else {
            setEmail("");
            setPassword("");
            navigate("/")
        }
        
    };

    const handleLogout = () => {
        dispatch({ type: "logout"})
    }

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined) {
            navigate("/");
        }
    }, [store.token, navigate]);

    return (

        <div className="text-center mt-5">
            <h1>Login</h1>
            {token && token !== "" && token !== undefined ? (
                "You are logged in with this token" + token
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleClick}>Login</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};


