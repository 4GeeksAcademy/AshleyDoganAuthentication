import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Login = () => {
    const { store, dispatch } = useGlobalReducer()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }
            );

            if (!response.ok) {
                console.log(
                    "there was an error while attempting to login:",
                    response.status,
                    response.statusText
                );
                return;
            }
            const data = await response.json();
            // console.log(data);
            sessionStorage.setItem("token", data.token);
            setEmail("");
            setPassword("");
            navigate("/")
        } catch (error) {
            console.error("problem logging in", error);
            alert("cannot login")
        };
    }

    const handleLogout = () => {
        dispatch({ type: "logout" })
    }

    useEffect(() => {
        if (sessionStorage.getItem("token") && sessionStorage.getItem("token") !== undefined) {
            navigate("/");
        }
    }, []);

    return (

        <div className="text-center mt-5">
            <h1>Login</h1>
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
        </div>
    );
};


