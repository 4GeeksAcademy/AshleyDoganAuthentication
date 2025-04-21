import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login")

	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto ">
					{!sessionStorage.getItem("token") ? (
						<>
							<Link to="/login">
								<button className="btn btn-primary">Login</button>
							</Link>
							<Link to="/signup">
								<button className="btn btn-secondary">Sign Up</button>
							</Link>
						</>
					) : (
						<button className="btn btn-primary" onClick={handleLogout}>
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};