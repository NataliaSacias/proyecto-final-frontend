import React, { Component, useContext, useRef, useState, useEffect } from "react";
import ImgPortada from "../../img/señora-login.jpg";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const PortadaLogin = () => {
	const { store, actions } = useContext(Context);
	const [Email, setEmail] = useState("");
	const [Contraseña, setContraseña] = useState("");
	const [validated, setValidated] = useState("");
	const login = e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		setValidated("was-validated");
		if (Contraseña !== "" && Email !== "") {
			e.preventDefault();
			actions.login(Email, Contraseña).then(() => {
				if (store.dataLogin.message === "Invalid email or password") {
					swal({
						title: "No se pudo logear",
						text: "El correo o la contraseña no son validos",
						icon: "error",
						buttons: "Aceptar"
					});
				} else {
					swal({
						title: "Hola " + store.dataLogin.user.nombre,
						text: "Ya te logeaste, hora de comprar",
						icon: "success",
						buttons: "Aceptar"
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
						¡Bienvenido!
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
					<h3>Iniciar sesión</h3>
				</div>
			</div>

			<form className={"needs-validation " + validated} onSubmit={login}>
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
								required
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<div className="">
					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
							<label htmlFor="exampleInputPassword1" style={{ color: "#006241" }}>
								Contraseña
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								style={{ borderColor: "#006241" }}
								required
								onChange={e => setContraseña(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<div className=" form-check mt-1">
					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-between">
							<input
								type="checkbox"
								className="form-check-input "
								id="exampleCheck1"
								style={{ borderColor: "#006241" }}
							/>
							<label className="form-check-label" htmlFor="exampleCheck1" style={{ color: "#006241" }}>
								Recordar contraseña
							</label>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4">
						<button
							type="submit"
							className="btn text-light fontKanit "
							style={{ backgroundColor: "#006241", width: "100%" }}>
							Ingresar
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-11 mx-auto d-flex justify-content-between mt-4 mb-5">
						<Link to="/recuperar" className="font-weight-bold" style={{ color: "#006241" }}>
							¿Olvidaste tu contraseña? Recuperala click acá!
						</Link>
						<Link to="/registro" className="font-weight-bold" style={{ color: "#006241" }}>
							¿Sos nuevo? Registrate click acá!
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};
