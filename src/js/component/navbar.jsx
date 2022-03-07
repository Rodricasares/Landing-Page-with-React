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
				<div className="dropdown">
					<a
						className="btn btn-outline-warning dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Menu
					</a>

					<ul
						className="dropdown-menu"
						aria-labelledby="dropdownMenuLink">
						<li>
							<a className="dropdown-item" href="#">
								Action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Another action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
