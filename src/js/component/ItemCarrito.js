import React, { Component } from "react";
import PropTypes from "prop-types";
import Canasta from "../../img/canasta.jpg";
import { InputCantidad } from "../component/InputCantidad";
import { Trash } from "react-bootstrap-icons";
import "../../styles/carrito.scss";

export const Item = props => {
	return (
		<div className="item-container">
			<Trash className="delete-item-desktop" />
			<div className="img-item">
				<img src={props.imgUrl} />
			</div>
			<div className="item-detalle">
				<div className="nombre">
					<p>{props.nombre}</p>
					<p>$ {props.precio}</p>
				</div>
				<div className="cantidad">
					<InputCantidad />
					<Trash className="delete-item" />
				</div>
				<div className="subtotal">
					<p>Subtotal </p>
					<p>$ 750</p>
				</div>
			</div>
		</div>
	);
};

Item.propTypes = {
	nombre: PropTypes.string,
	precio: PropTypes.number,
	imgUrl: PropTypes.string
};
