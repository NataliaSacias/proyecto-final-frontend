import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalCarrito } from "../component/ModalCarrito";
import { Truck } from "react-bootstrap-icons";
import { ProductosDetacados } from "../component/ProductosDestacados";
import { InputCantidad } from "../component/InputCantidad";
import { Breadcrumbs } from "../component/Breadcrumb";
import "../../styles/producto.scss";

export const Producto = () => {
	const { store, actions } = useContext(Context);
	const [clicked, setClick] = useState(false);
	const params = useParams();
	const detalle = store.detalleProducto;

	const [cantidad, setCantidad] = useState(1);

	const agregarCantidad = () => {
		setCantidad(cantidad + 1);
	};

	const eliminarCantidad = () => {
		setCantidad(cantidad <= 1 ? 1 : cantidad - 1);
	};

	//
	const [modalShow, setModalShow] = useState(false);

	const showModal = () => {
		setModalShow(!modalShow);
	};
	//

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onChangeInput = event => {
		parseInt(event.target.value ? event.target.value : 1); //Esto es porque al borrar queda en null y al querer sumar le quiere sumar al null y rompe todo, entonces parseo el nulo a numero
	};

	return (
		<>
			<div className="producto-wrapper">
				<Breadcrumbs nombre={store.detalleProducto.nombre} />
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
							<div className="input-container">
								<input
									type="button"
									value="-"
									onClick={() => {
										eliminarCantidad();
									}}
								/>
								<input
									type="button"
									value="+"
									onClick={() => {
										agregarCantidad();
									}}
								/>
								<input
									type="text"
									inputMode="numeric"
									value={cantidad}
									onChange={() => onChangeInput(event)}
									min="1"
								/>
							</div>
							<button
								onClick={() => {
									actions.agregarProductoAlCarrito({
										nombre: detalle.nombre,
										precio: detalle.precio,
										fotoDePortada: detalle.fotoDePortada,
										id: detalle.id,
										cantidad: cantidad
									});
									actions.calcularTotal();
									showModal();
								}}>
								Agregar al carrito
							</button>
						</div>
						<div className="envio">
							<Truck />
							<p>Envíos: Lunes y Miércoles - 10 a 18:30hs.</p>
						</div>
					</div>
				</div>
			</div>
			<ProductosDetacados />
			<ModalCarrito
				nombre={store.detalleProducto.nombre}
				foto={store.detalleProducto.fotoDePortada}
				precio={store.detalleProducto.precio}
				modalShow={modalShow}
				showModal={showModal}
			/>
		</>
	);
};
