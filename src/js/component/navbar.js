import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { List, PersonCircle, Search, Basket2Fill, X, BoxArrowDownRight } from "react-bootstrap-icons";
import Logo from "../../img/landa_logo.png";
import { SearchBar } from "./SearchBar";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let hayElementos = store.productosCarrito.length;

	const [token, setToken] = useState(false);

	return (
		<>
			<nav className="navbar-container">
				<div className="logo">
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				{store.dataLogin.token ? (
					<>
						<div className="user-nombre">
							<p>Hola {store.dataLogin.user.nombre}</p>
							<Link
								to="/"
								onClick={() => {
									actions.clearDataLogin();
								}}>
								<BoxArrowDownRight className="icon" />
							</Link>
						</div>
					</>
				) : (
					""
				)}
				<div className="icon-container">
					{store.dataLogin.token ? (
						<Link to="/miperfil">
							<PersonCircle className="icon" />
						</Link>
					) : (
						<Link to="/login">
							<PersonCircle className="icon" />
						</Link>
					)}

					<Link to="/carrito">
						<span className={"cantidad " + (hayElementos != 0 ? "hay" : "")}>
							{store.productosCarrito.length}
						</span>
						<Basket2Fill className="icon" />
					</Link>
				</div>
			</nav>
			<div style={{ height: "100px" }} />
		</>
	);
};
