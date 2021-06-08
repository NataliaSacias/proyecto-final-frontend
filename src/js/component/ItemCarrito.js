import React, { Component } from "react";
import Canasta from "../../img/canasta.jpg";
import { InputCantidad } from "../component/InputCantidad";
import { Trash } from "react-bootstrap-icons";
import "../../styles/carrito.scss";

export const Item = () => {
	return (
		<div className="item-container">
			<div className="img-item">
				<img src={Canasta} />
			</div>
			<div className="item-detalle">
				<div className="nombre">
					<p>Canasta grande</p>
					<p>$ 750</p>
				</div>
				<div className="cantidad">
					<InputCantidad />
					<Trash className="delete-item" />
				</div>
				<div className="subtotal">
					<p>Subtotal </p>
					<p>$ 750</p>
				</div>
			</div>
		</div>
	);
};
