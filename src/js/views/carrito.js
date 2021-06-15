import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Item } from "../component/ItemCarrito";
import { Context } from "../store/appContext";
import { NoHayProducto } from "../component/NoHayProductos";
import "../../styles/carrito.scss";

export const Carrito = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.productosCarrito.length != 0 ? (
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
								<div key={index}>
									<Item
										keyIndex={index}
										nombre={producto.nombre}
										precio={producto.precio}
										cantidad={producto.cantidad}
										foto={producto.fotoDePortada}
									/>
									<hr />
								</div>
							);
						})}

						<div className="total-container">
							<p>
								Total <span>$ {store.total}</span>
							</p>
						</div>

						<Link className="btn-continuar" to="/datosdecompra">
							Continuar
						</Link>
					</div>
				</div>
			) : (
				<NoHayProducto />
			)}
		</>
	);
};
