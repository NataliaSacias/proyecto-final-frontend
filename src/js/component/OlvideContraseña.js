import React, { Component, useState, useContext } from "react";
import ImgPortada from "../../img/señora-login.jpg";
import { Link, Redirect } from "react-router-dom";
import "../../styles/footer.scss";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const OlvideContraseña = () => {
	const { store, actions } = useContext(Context);
	const [Email, setEmail] = useState("");
	const [Ok, setOk] = useState(false);
	function SendPostToEmail(e) {
		e.preventDefault();
		actions.SendPassToBack(Email);
		swal({
			title: "Revisa tu correo electronico",
			text:
				"Si el correo que ingresate es correcto te debe de llegar las instrucciones para restableces la contraseña",
			icon: "success",
			buttons: "Aceptar"
		}).then(() => {
			setOk(true);
		});
	}
	return (
		<div className="fontKanit d-flex justify-content-center flex-column">
			<img src={ImgPortada} height="200px" width="100%" style={{ objectFit: "cover" }} />
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
					<button
						type="button"
						className="btn text-light fontKanit p-3 px-5 mt-1 mb-4"
						style={{ backgroundColor: "#EE7F11", width: "100%" }}>
						Recuperar Contraseña
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
					<h3>Ingresa tu email</h3>
				</div>
			</div>
			{Ok ? (
				<Redirect to="/login" />
			) : (
				<form onSubmit={SendPostToEmail}>
					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="exampleInputEmail1" style={{ color: "#006241" }}>
									Email
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									style={{ borderColor: "#006241" }}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4">
							<button
								type="submit"
								className="btn text-light fontKanit "
								style={{ backgroundColor: "#006241", width: "100%" }}>
								Recuperar
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4 mb-5">
							<Link to="/login" className="font-weight-bold" style={{ color: "#006241" }}>
								¿Recuperaste tu contraseña? Vuelve a Iniciar sesión
							</Link>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};
