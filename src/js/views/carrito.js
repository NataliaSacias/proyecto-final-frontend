import React, { useState, useContext } from "react";
import { Item } from "../component/ItemCarrito";
import { Context } from "../store/appContext";
import { NoHayProducto } from "../component/NoHayProductos";
import "../../styles/carrito.scss";

export const Carrito = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="carrito-container">
			<h3>Mi carrito</h3>
			<div className="carrito-content">
				<div className="carrito-header">
					<p>Producto</p>
					<p>Cantidad</p>
					<p>Subtotal</p>
				</div>
				{store.productosCarrito.map((producto, index) => {
					return (
						<>
							<Item
								key={index}
								keyIndex={index}
								nombre={producto.nombre}
								precio={producto.precio}
								cantidad={producto.cantidad}
								foto={producto.fotoDePortada}
							/>
							<hr />
						</>
					);
				})}

				<div className="total-container">
					<p>
						Total <span>$ {store.total}</span>
					</p>
				</div>

				<button className="btn-continuar">Continuar</button>
			</div>
			<NoHayProducto />
		</div>
	);
};
