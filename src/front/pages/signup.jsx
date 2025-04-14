import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const SignUp = () =>{
    const { store, dispatch } = useGlobalReducer()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }
            );

            if (response.ok) navigate("/login");
            else alert("problem signing up");
        }
        catch (error) {
            console.error("problem signing up", error);
            alert("cannot sign up")
        };
    }


return (

    <div className="text-center mt-5">
        <h1>Register</h1>
        {/* {token && token !== "" && token !== undefined ? (
            "You are logged in with this token" + token
        ) : ( */}
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
                <button onClick={handleSignup}>Register</button>
            </div>
    </div>
);
};
