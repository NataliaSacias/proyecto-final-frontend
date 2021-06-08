import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import emailjs from "emailjs-com";

export const PortadaContact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_jn5nnlo", "template_9fooxil", e.target, "user_6cLD77kHrNSmPzIqTgp1f").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
	}
	return (
		<div className="fontKanit d-flex justify-content-center flex-column">
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
					<h3>Contacto</h3>
				</div>
			</div>

			<form className=" justify-content-center mr-5 ml-5 contact-form" onSubmit={sendEmail}>
				<div className="form-row">
					<div className="form-group col-sm-6 col-md-6">
						<label forhtml="inputEmail4" style={{ color: "#006241" }}>
							Nombre
						</label>
						<input className="form-control" name="first_name" required />
					</div>

					<div className="form-group col-sm-6 col-md-6">
						<label forhtml="inputEmail4" style={{ color: "#006241" }}>
							Apellido
						</label>
						<input className="form-control" name="last_name" required />
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-sm-6 col-md-6 col-lg-6">
						<label forhtml="inputEmail4" style={{ color: "#006241" }}>
							Telefono
						</label>
						<input className="form-control" name="telefono" required />
					</div>

					<div className="form-group col-sm-6 col-md-6  col-lg-6 ">
						<label forhtml="inputEmail4" style={{ color: "#006241" }}>
							Email
						</label>
						<input type="email" className="form-control" id="inputEmail4" name="email" required />
					</div>
				</div>

				<div className="form-group">
					<label forhtml="exampleFormControlTextarea1" style={{ color: "#006241" }}>
						Escriba sus preguntas
					</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						name="textarea"
						required
					/>
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
};
