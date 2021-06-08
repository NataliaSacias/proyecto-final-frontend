import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import img from "../../img/mix-familiar-.jpg";

export const Card = props => {
	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.imgUrl === "no diponible" ? img : props.imgUrl} className="card-img-top" alt="..." />
				<div className="card-body d-flex flex-column align-items-center">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">${props.precio}</p>
					<Link
						to={"/tienda/detalle/" + props.id}
						type="button"
						className="btn text-light fontKanit px-5"
						style={{ backgroundColor: "#EE7F11" }}>
						Ver Mas
					</Link>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	nombre: PropTypes.string,
	precio: PropTypes.number,
	imgUrl: PropTypes.string,
	id: PropTypes.number
};
