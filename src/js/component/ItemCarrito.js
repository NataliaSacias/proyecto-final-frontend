import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Canasta from "../../img/canasta.jpg";
import { InputCantidad } from "../component/InputCantidad";
import { Trash } from "react-bootstrap-icons";
import "../../styles/carrito.scss";

export const Item = props => {
	const { store, actions } = useContext(Context);
	const [cantidad, setCantidad] = useState(props.cantidad);
	const [ok, setOk] = useState(false);

	useEffect(
		() => {
			setCantidad(store.productosCarrito[props.keyIndex].cantidad);
		},
		[cantidad]
	);

	const onChangeInput = event => {
		parseInt(event.target.value ? event.target.value : 1); //Esto es porque al borrar queda en null y al querer sumar le quiere sumar al null y rompe todo, entonces parseo el nulo a numero
	};

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
					<div className="input-container">
						<input
							type="button"
							value="-"
							onClick={() => {
								actions.disminuirCantidad(props.keyIndex);
							}}
						/>
						<input
							type="button"
							value="+"
							onClick={() => {
								actions.aumentarCantidad(props.keyIndex);
							}}
						/>
						<input
							type="text"
							inputMode="numeric"
							value={store.productosCarrito[props.keyIndex].cantidad}
							onChange={() => onChangeInput(event)}
							min="1"
						/>
					</div>
					<div
						onClick={() => {
							actions.eliminarProductoCarrito(props.keyIndex);
						}}>
						<Redirect to="/carrito" />
						<Trash className="delete-item" />
					</div>
				</div>
				<div className="subtotal">
					<p>Subtotal </p>
					<p>$ {props.precio * store.productosCarrito[props.keyIndex].cantidad}</p>
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
