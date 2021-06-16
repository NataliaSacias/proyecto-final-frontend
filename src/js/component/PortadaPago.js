import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Calendario } from "./Calendario";
import { Context } from "../store/appContext";

export const Portadapago = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="fontKanit d-flex flex-column pago-container">
			<div className="row">
				<div className="pago-titulo">
					<h3>Ingresa los datos para la entrega</h3>
				</div>
			</div>

			<div className="justify-content-center datos-container">
				<div>
					<h5>Dirección:</h5>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios1"
						value="option1"
						checked
					/>

					<label className="form-check-label" htmlFor="exampleRadios1">
						option1
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios2"
						value="option2"
					/>
					<label className="form-check-label" htmlFor="exampleRadios2">
						option2
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios3"
						value="option3"
					/>
					<label className="form-check-label" htmlFor="exampleRadios3">
						option3
					</label>
				</div>
			</div>
			<hr />
			<div className="fecha-hora-container">
				<h5>Fecha y hora:</h5>
				<Calendario />
			</div>
			<hr />
			<div className="datos-pago-container pago-titulo d-flex flex-column justify-content-center align-items-center">
				<h3> Ingresa datos para el pago </h3>
				<p>Hacé click en el siguiente botón</p>

				<form action="https://3001-blush-llama-571iuzgp.ws-us09.gitpod.io/comprar" method="POST">
					<input type="hidden" value="Pago de carrito" name="title" />
					<input type="hidden" value={store.total} name="price" />
					<input
						type="submit"
						value="Comprar ahora"
						className="btn text-light fontKanit mt-2"
						style={{ backgroundColor: "#006241", width: "100%" }}
					/>
				</form>
			</div>
		</div>
	);
};
