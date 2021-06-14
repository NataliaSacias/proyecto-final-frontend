import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { List, PersonCircle, Search, Basket2Fill, X } from "react-bootstrap-icons";
import Logo from "../../img/landa_logo.png";
import { SearchBar } from "./SearchBar";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [clicked, setClick] = useState(false);
	let hayElementos = store.productosCarrito.length;

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
					<Link to="/login">
						<PersonCircle className="icon" />
					</Link>
					<Link to="/carrito">
						<span className={"cantidad " + (hayElementos != 0 ? "hay" : "")}>
							{store.productosCarrito.length}
						</span>
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
