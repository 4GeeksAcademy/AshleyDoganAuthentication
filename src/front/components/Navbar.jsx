import { Link } from "react-router-dom";

export const Navbar = () => {
	

	const handleLogout = () => {
		actions.logout();
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!sessionStorage.getItem("token") ? (
						<>
							<Link to="/login">
								<button className="btn btn-primary">Login</button>
							</Link>
							{/* Moved Register button to be shown when there's no token */}
							<Link to="/signup">
								{" "}
								{/* Assuming you have a route for registration */}
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