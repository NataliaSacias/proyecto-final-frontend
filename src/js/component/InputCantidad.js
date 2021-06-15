import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/inputCantidad.scss";

export const InputCantidad = props => {
	const { store, actions } = useContext(Context);
	const onChangeInput = event => {
		parseInt(event.target.value ? event.target.value : 1); //Esto es porque al borrar queda en null y al querer sumar le quiere sumar al null y rompe todo, entonces parseo el nulo a numero
	};

	const [cantidad, setCantidad] = useState(props.cantidad);

	useEffect(
		() => {
			setCantidad(store.productosCarrito[props.keyIndex].cantidad);
		},
		[cantidad]
	);

	return (
		<div className="input-container">
			<input
				type="button"
				value="-"
				onClick={() => {
					actions.aumentarCantidad();
				}}
			/>
			<input
				type="button"
				value="+"
				onClick={() => {
					actions.disminuirCantidad();
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
	);
};

InputCantidad.propTypes = {
	cantidad: PropTypes.number,
	/* eliminarCantidad: PropTypes.func,
	agregarCantidad: PropTypes.func,
    setCantidad: PropTypes.func */
	keyIndex: PropTypes.number
};
