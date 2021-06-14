import React, { Component } from "react";
import { List, PersonCircle, Search, Basket2Fill, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../../styles/carrito.scss";

export const NoHayProducto = () => {
	return (
		<div className="noHay-container">
			<Basket2Fill className="basket-icon" />
			<p>No hay elementos en el carrito</p>
			<Link to="/">
				<button className="btn-back">Volver al inicio</button>
			</Link>
		</div>
	);
};
