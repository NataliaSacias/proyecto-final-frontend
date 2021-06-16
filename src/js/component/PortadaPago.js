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
				<div className="">
					<label className="form-check-label" htmlFor="exampleRadios1">
						Manuel D. Rodríguez 651 Casa con rejas y patio al frente, San José
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

				<form action={process.env.BACKEND_URL + "/comprar"} method="POST">
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
