import React from "react";
import Title from "./titles.jsx";

const Navbar = () => {
	return (
		<div className="fixed-top mb-3">
			<div className="collapse" id="navbarToggleExternalContent">
				<div className="bg-dark p-4">
					<h5 className="text-white h4">Collapsed content</h5>
					<span className="text-muted">
						Toggleable via the navbar brand.
					</span>
				</div>
			</div>
			<nav className="navbar navbar-dark bg-dark px-3 ">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggleExternalContent"
					aria-controls="navbarToggleExternalContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</nav>
		</div>
	);
};

export default Navbar;
