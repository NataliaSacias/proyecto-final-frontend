import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Apple from "../../img/apple.jpg";
import LogoNegativo from "../../img/logo_b&w.png";
import { Truck } from "react-bootstrap-icons";
import { ProductosDetacados } from "../component/ProductosDestacados";
import { InputCantidad } from "../component/InputCantidad";
import "../../styles/producto.scss";

export const Producto = () => {
	const { store, actions } = useContext(Context);
	const [clicked, setClick] = useState(false);
	const params = useParams();
	const detalle = store.detalleProducto;

	// const menuClick = () => {
	// 	setClick(!clicked);
	// };

	const [cantidad, setCantidad] = useState(1);

	const agregarCantidad = () => {
		setCantidad(cantidad + 1);
	};

	const eliminarCantidad = () => {
		setCantidad(cantidad <= 1 ? 1 : cantidad - 1);
	};
	return (
		<>
			<div className="producto-wrapper">
				<div className="producto-container">
					<div className="producto-img">
						<img src={store.detalleProducto.fotoDePortada} />
						<small>Imagen meramente ilustrativa</small>
					</div>
					<div className="content">
						<div className="header">
							<h3>{store.detalleProducto.nombre}</h3>
							<p>
								${store.detalleProducto.precio}
								<span>xKG</span>
								<span>En stock</span>
							</p>
						</div>
						<div className="btn-container">
							<InputCantidad
								setCantidad={setCantidad}
								cantidad={cantidad}
								agregarCantidad={agregarCantidad}
								eliminarCantidad={eliminarCantidad}
							/>
							<button
								onClick={() => {
									actions.agregarProductoAlCarrito({
										nombre: detalle.nombre,
										precio: detalle.precio,
										fotoDePortada: detalle.fotoDePortada,
										id: detalle.id,
										cantidad: cantidad
									});
									// menuClick();
									actions.calcularTotal();
								}}>
								Agregar al carrito
							</button>
							{/* <span className={"agregado-correcto" + (clicked == true ? " on" : "")}>
								<p>¡Elemento agregado correctamente!</p>
							</span> */}
						</div>
						<div className="envio">
							<Truck />
							<p>Envíos: Lunes y Miércoles - 10 a 18:30hs.</p>
						</div>
					</div>
					{/* <div className="producto-detalle">
						<p>{store.detalleProducto.descripcion}</p>
					</div> */}
				</div>
			</div>
			<ProductosDetacados />
		</>
	);
};
