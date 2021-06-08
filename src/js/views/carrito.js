import React, { useState } from "react";
import { Item } from "../component/ItemCarrito";
import "../../styles/carrito.scss";

export const Carrito = () => {
	return (
		<div className="carrito-container">
			<h3>Mi carrito</h3>
			<div className="carrito-header">
				<p>Producto</p>
				<p>Cantidad</p>
				<p>Subtotal</p>
			</div>
			<Item />
			<Item />
			<button className="btn-continuar">Continuar</button>
		</div>
	);
};
