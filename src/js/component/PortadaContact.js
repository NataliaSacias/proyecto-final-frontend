import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const PortadaContact = () => (
	<div className="fontKanit d-flex justify-content-center flex-column">
		<div className="row">
			<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
				<h3>Contacto</h3>
			</div>
		</div>

		<form className=" justify-content-center mr-5 ml-5">
			<div className="form-row">
				<div className="form-group col-sm-6 col-md-6">
					<label forhtml="inputEmail4" style={{ color: "#006241" }}>
						Nombre
					</label>
					<input className="form-control" />
				</div>

				<div className="form-group col-sm-6 col-md-6">
					<label forhtml="inputEmail4" style={{ color: "#006241" }}>
						Apellido
					</label>
					<input className="form-control" />
				</div>
			</div>

			<div className="form-row">
				<div className="form-group col-sm-6 col-md-6 col-lg-6">
					<label forhtml="inputEmail4" style={{ color: "#006241" }}>
						Telefono
					</label>
					<input className="form-control" />
				</div>

				<div className="form-group col-sm-6 col-md-6  col-lg-6 ">
					<label forhtml="inputEmail4" style={{ color: "#006241" }}>
						Email
					</label>
					<input type="email" className="form-control" id="inputEmail4" />
				</div>
			</div>

			<div className="form-group">
				<label forhtml="exampleFormControlTextarea1" style={{ color: "#006241" }}>
					Escriba sus preguntas
				</label>
				<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
			</div>
			<div className="row mb-5">
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4">
					<button
						type="submit"
						className="btn text-light fontKanit "
						style={{ backgroundColor: "#006241", width: "100%" }}>
						Enviar
					</button>
				</div>
			</div>
		</form>
	</div>
);
