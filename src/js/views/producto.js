import React, { Component, useState } from "react";
import LogoNegativo from "../../img/logo_b&w.png";
import { Link } from "react-router-dom";
import Apple from "../../img/apple.jpg";
import { Truck } from "react-bootstrap-icons";
import { ProductosDetacados } from "../component/ProductosDestacados";
import { InputCantidad } from "../component/InputCantidad";
import "../../styles/producto.scss";

export const Producto = () => {
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
							<InputCantidad />
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
