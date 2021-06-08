import React, { useState } from "react";
import "../../styles/inputCantidad.scss";

export const InputCantidad = () => {
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
		<div className="input-container">
			<input type="button" value="-" onClick={() => eliminarCantidad()} />
			<input type="button" value="+" onClick={() => agregarCantidad()} />
			<input type="text" inputMode="numeric" value={cantidad} onChange={() => onChangeInput(event)} min="1" />
		</div>
	);
};
