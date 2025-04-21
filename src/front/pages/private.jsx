import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Private = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) navigate("/login")
    }, [])
return (
    <div className="container">
        <h1>Private Dashboard</h1>
    </div>
)
}