import React, { Component, useContext } from "react";
import { Route } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import img from "../../img/mix-familiar-.jpg";
import "../../styles/home.scss";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="mb-4">
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.imgUrl === "no diponible" ? img : props.imgUrl} className="card-img-top" alt="..." />
				<div className="card-body d-flex flex-column align-items-center">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text">${props.precio}</p>
					<Link
						to={"/tienda/detalle/" + props.id}
						type="button"
						className="btn text-white fontKanit px-5 btn-view-more"
						style={{ backgroundColor: "#EE7F11" }}
						onClick={() => {
							actions.loadDetalleProducto(props.id);
						}}>
						Ver más
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
