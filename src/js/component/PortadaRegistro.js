import React, { Component, useContext, useRef, useState, useEffect } from "react";
import ImgPortada from "../../img/señora-login.jpg";
import { Link, Redirect } from "react-router-dom";
import "../../styles/footer.scss";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const PortadaRegistro = () => {
	const { store, actions } = useContext(Context);
	const [Ok, setOk] = useState(false);
	const [Nombre, setNombre] = useState("");
	const [Apellido, setApellido] = useState("");
	const [Email, setEmail] = useState("");
	const [Contraseña, setContraseña] = useState("");
	const [ContraseñaConfirmar, setContraseñaConfirmar] = useState("");
	const [validated, setValidated] = useState("");

	const registro = e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		if (Contraseña !== ContraseñaConfirmar) {
			setContraseñaConfirmar("");
			e.preventDefault();
			e.stopPropagation();
		}
		setValidated("was-validated");
		if (
			Contraseña !== "" &&
			Email !== "" &&
			Apellido !== "" &&
			Nombre !== "" &&
			ContraseñaConfirmar !== "" &&
			Contraseña === ContraseñaConfirmar
		) {
			e.preventDefault();
			actions.registro(Email, Contraseña, Nombre, Apellido).then(() => {
				if (store.dataRegistro.message === "Users already exists with this email") {
					swal({
						title: "No se puedo crear tu cuenta",
						text: "El email ya fue registrado",
						icon: "error",
						buttons: "Aceptar"
					});
				} else {
					swal({
						title: "Bienvenido",
						text: "Su cuenta se creo correctamente",
						icon: "success",
						buttons: "Aceptar"
					}).then(() => {
						setOk(true);
					});
				}
			});
		}
	};
	return (
		<div className="fontKanit d-flex justify-content-center flex-column">
			<img src={ImgPortada} height="200px" width="100%" style={{ objectFit: "cover" }} />
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
					<button
						type="button"
						className="btn text-light fontKanit p-3 px-5 mt-1 mb-4"
						style={{ backgroundColor: "#EE7F11", width: "100%" }}>
						Crea tu usuario
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
					<h3>Completa la información:</h3>
				</div>
			</div>
			{Ok ? (
				<Redirect to="login" />
			) : (
				<form className={"needs-validation " + validated} onSubmit={registro}>
					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="nombreUsuario" style={{ color: "#006241" }}>
									Nombre
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-center flex-column">
								<input
									type="text"
									className="form-control"
									id="nombreUsuario"
									aria-describedby="emailHelp"
									style={{ borderColor: "#006241" }}
									onChange={e => setNombre(e.target.value)}
									required
								/>
								<div className="invalid-feedback">Porfavor ingrese un Nombre.</div>
							</div>
						</div>
					</div>

					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="apellidoUsuario" style={{ color: "#006241" }}>
									Apellido
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-center flex-column">
								<input
									type="text"
									className="form-control"
									id="apellidoUsuario"
									style={{ borderColor: "#006241" }}
									onChange={e => setApellido(e.target.value)}
									required
								/>
								<div className="invalid-feedback">Porfavor ingrese un Apellido.</div>
							</div>
						</div>
					</div>

					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="emailUsuario" style={{ color: "#006241" }}>
									Email
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-center flex-column">
								<input
									type="email"
									className="form-control"
									id="emailUsuario"
									style={{ borderColor: "#006241" }}
									onChange={e => setEmail(e.target.value)}
									required
								/>
								<div className="invalid-feedback">Porfavor ingrese un Email.</div>
							</div>
						</div>
					</div>

					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="contraseñaUsuario" style={{ color: "#006241" }}>
									Contraseña
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-center flex-column">
								<input
									type="password"
									className="form-control"
									id="contraseñaUsuario"
									style={{ borderColor: "#006241" }}
									onChange={e => setContraseña(e.target.value)}
									required
								/>
								<div className="invalid-feedback">Porfavor ingrese una Contraseña.</div>
							</div>
						</div>
					</div>

					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="confirmarContraseña" style={{ color: "#006241" }}>
									Confirmar contraseña
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-center flex-column">
								<input
									type="password"
									className={" form-control "}
									id="confirmarContraseña"
									style={{ borderColor: "#006241" }}
									onChange={e => setContraseñaConfirmar(e.target.value)}
									value={ContraseñaConfirmar}
									required
								/>
								<div className="invalid-feedback">Las contraseña no coinciden.</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4">
							<button
								type="submit"
								className="btn text-light fontKanit "
								style={{ backgroundColor: "#006241", width: "100%" }}>
								Registrarse
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4 mb-5">
							<Link to="/login" className="font-weight-bold" style={{ color: "#006241" }}>
								¿Ya tienes una cuenta?
							</Link>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};
