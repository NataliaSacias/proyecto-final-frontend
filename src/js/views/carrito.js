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
			<Item
				nombre={"Banana"}
				precio={230}
				imgUrl={"https://tienda.ecohuertas.com.uy/imagenes/img_contenido/productos/b/for202.jpg"}
			/>
			<Item
				nombre={"Manzanas"}
				precio={530}
				imgUrl={"https://tienda.ecohuertas.com.uy/imagenes/img_contenido/productos/b/fpi001.jpg"}
			/>
			<button className="btn-continuar">Continuar</button>
		</div>
	);
};
