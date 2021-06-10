import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/inputCantidad.scss";

export const InputCantidad = props => {
	const onChangeInput = event => {
		props.setCantidad(parseInt(event.target.value ? event.target.value : 1)); //Esto es porque al borrar queda en null y al querer sumar le quiere sumar al null y rompe todo, entonces parseo el nulo a numero
	};

	return (
		<div className="input-container">
			<input type="button" value="-" onClick={() => props.eliminarCantidad()} />
			<input type="button" value="+" onClick={() => props.agregarCantidad()} />
			<input
				type="text"
				inputMode="numeric"
				value={props.cantidad}
				onChange={() => onChangeInput(event)}
				min="1"
			/>
		</div>
	);
};

InputCantidad.propTypes = {
	cantidad: PropTypes.number,
	eliminarCantidad: PropTypes.func,
	agregarCantidad: PropTypes.func,
	setCantidad: PropTypes.func
};
