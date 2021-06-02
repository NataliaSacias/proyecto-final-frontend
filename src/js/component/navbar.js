import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, PersonCircle, Search, Basket2Fill, X } from "react-bootstrap-icons";
import Logo from "../../img/landa_logo.png";
import { SearchBar } from "./SearchBar";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const [clicked, setClick] = useState(false);

	const menuClick = () => {
		setClick(!clicked);
	};

	return (
		<>
			<nav className="navbar-container">
				<div className="icon-mobile" onClick={menuClick}>
					{clicked == true ? <X className="icon" /> : <Search className="icon" />}
				</div>

				<div className="logo">
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				<div className="desktop-search">
					<SearchBar />
				</div>
				<div className="icon-container">
					<Link to="/">
						<PersonCircle className="icon" />
					</Link>
					<Link to="/">
						<Basket2Fill className="icon" />
					</Link>
				</div>
			</nav>
			<div style={{ height: "100px" }} />
			<div className={"mobile-search" + (clicked == true ? " on" : "")}>
				<SearchBar />
                
			</div>
		</>
	);
};
