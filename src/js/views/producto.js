import React, { Component, useState } from "react";
import LogoNegativo from "../../img/logo_b&w.png";
import { Link } from "react-router-dom";
import Apple from "../../img/apple.jpg";
import { Truck } from "react-bootstrap-icons";
import { ProductosDetacados } from "../component/ProductosDestacados";
import "../../styles/producto.scss";

export const Producto = () => {
	const [cantidad, setCantidad] = useState(1);

	const agregarCantidad = () => {
		setCantidad(cantidad + 1);
	};

	const eliminarCantidad = () => {
		setCantidad(cantidad <= 1 ? 1 : cantidad - 1);
	};

	const onChangeInput = event => {
		setCantidad(parseInt(event.target.value ? event.target.value : 1)); //Esto es porque al borrar queda en null y al querer sumar le quiere sumar al null y rompe todo, entonces parseo el nulo a numero
	};

	return (
		<>
			<div className="producto-wrapper">
				<div className="producto-container">
					<div className="producto-img">
						<img src={Apple} />
					</div>
					<div className="content">
						<div className="header">
							<h3>Manzana Fuji</h3>
							<p>
								$110
								<span>xKG</span>
								<span>En stock</span>
							</p>
						</div>
						<div className="btn-container">
							<div className="input-container">
								<input type="button" value="-" onClick={() => eliminarCantidad()} />
								<input type="button" value="+" onClick={() => agregarCantidad()} />
								<input
									type="text"
									inputMode="numeric"
									value={cantidad}
									onChange={() => onChangeInput(event)}
									min="1"
								/>
							</div>
							<button>Agregar al carrito</button>
						</div>
						<div className="envio">
							<Truck />
							<p>Envíos: Lunes y Miércoles - 10 a 18:30hs.</p>
						</div>
					</div>
				</div>
			</div>
			<ProductosDetacados />
		</>
	);
};
