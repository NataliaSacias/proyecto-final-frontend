import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const PortadaContact = () => (
	<div className="fontKanit d-flex justify-content-center flex-column contacto-container">
		<div className="row">
			<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
				<h3>Contacto</h3>
			</div>
		</div>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38373.15428401008!2d-56.77586110766785!3d-34.32034645796706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a17bbda09cbe79%3A0xd6707a1e3a7f43a7!2sJuan%20Soler%2C%20Departamento%20de%20San%20Jos%C3%A9!5e0!3m2!1ses-419!2suy!4v1623191196889!5m2!1ses-419!2suy"
			className="contacto-mapa"
		/>
		<form className=" justify-content-center">
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
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4 btn-enviar">
					<button
						type="submit"
						className="btn text-white fontKanit "
						style={{ backgroundColor: "#006241", width: "100%" }}>
						Enviar
					</button>
				</div>
			</div>
		</form>
	</div>
);
