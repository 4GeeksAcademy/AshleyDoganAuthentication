import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../../styles/home.css";


export const SignUp = () => {
    const {store, dispatch} =useGlobalReducer();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const handleClick = async () => {
        const result = await dispatch.register(email, password);
        if (result.success) {
            setEmail("");
            setPassword("");

            alert("registration was successful");

            navigate("/");
        } else {
            alert("invalid email or password")
        }
    };

    useEffect(() => {
        if (store.token && store.token !== "" && !== undefined) {
            navigate("/");
        }
    }, [store.token, navigate]);

    return (

        <div className="text-center mt-5">
            <h1>Register</h1>
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
                    <button onClick={handleClick}>Register</button>
                </div>
            )}
        </div>
    );
};
