import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Canasta from "../../img/canasta.jpg";
import { InputCantidad } from "../component/InputCantidad";
import { Trash } from "react-bootstrap-icons";
import "../../styles/carrito.scss";

export const Item = props => {
	const { store, actions } = useContext(Context);
	const [cantidad, setCantidad] = useState(props.cantidad);

	const index = props.keyIndex;

	const agregarCantidad = () => {
		setCantidad(cantidad + 1);
	};

	const eliminarCantidad = () => {
		setCantidad(cantidad <= 1 ? 1 : cantidad - 1);
	};

	useEffect(
		() => {
			actions.setCantidadCarrito(cantidad, index);
			actions.calcularTotal();
		},
		[cantidad]
	);

	return (
		<div className="item-container">
			<div className="img-item">
				<img src={props.foto} />
			</div>
			<div className="item-detalle">
				<div className="nombre">
					<p>{props.nombre}</p>
					<p>
						${props.precio}
						<span>xKG</span>
					</p>
				</div>
				<div className="cantidad">
					<InputCantidad
						setCantidad={setCantidad}
						cantidad={cantidad}
						agregarCantidad={agregarCantidad}
						eliminarCantidad={eliminarCantidad}
					/>
					<div
						onClick={() => {
							actions.eliminarProductoCarrito(index);
							actions.calcularTotal();
						}}>
						<Trash className="delete-item" />
					</div>
				</div>
				<div className="subtotal">
					<p>Subtotal </p>
					<p>$ {props.precio * cantidad}</p>
				</div>
			</div>
		</div>
	);
};

Item.propTypes = {
	nombre: PropTypes.string,
	precio: PropTypes.number,
	foto: PropTypes.string,
	keyIndex: PropTypes.number,
	cantidad: PropTypes.number
};
