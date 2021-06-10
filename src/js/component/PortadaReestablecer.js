import React, { Component, useContext, useRef, useState, useEffect } from "react";
import ImgPortada from "../../img/señora-login.jpg";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/footer.scss";
import { Context } from "../store/appContext";
import swal from "sweetalert";

export const PortadaReestablecer = () => {
	const { store, actions } = useContext(Context);
	const [Contraseña, setContraseña] = useState("");
	const [ConfirmarContraseña, setConfirmarContraseña] = useState("");
	const [Ok, setOk] = useState(false);
	const params = useParams();
	const tokenOK = params.token.replace(/\$/g, ".");
	const [validated, setValidated] = useState("");
	const contraseñacambiar = e => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		if (Contraseña !== ConfirmarContraseña) {
			e.preventDefault();
			e.stopPropagation();
			setConfirmarContraseña("");
			swal({
				title: "Las contraseñas no coinciden ",
				text: "Revisa las contraseñas",
				icon: "error",
				buttons: "Aceptar"
			});
		}
		if (Contraseña !== "" && ConfirmarContraseña !== "") {
			if (Contraseña === ConfirmarContraseña) {
				setValidated("was-validated");
				e.preventDefault();
				actions.SendPassToBackForChangePass(Contraseña, ConfirmarContraseña, tokenOK).then(() => {
					setOk(true);
					swal({
						title: "La contraseña a cambiado",
						text: "Vuelve a intener logearte con tu nueva contraseña",
						icon: "success",
						buttons: "Aceptar"
					});
				});
			}
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
					<h3>Cambiar contraseña</h3>
				</div>
			</div>
			{Ok ? (
				<Redirect to="/login" />
			) : (
				<form className={"needs-validation " + validated} onSubmit={contraseñacambiar}>
					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="exampleInputEmail1" style={{ color: "#006241" }}>
									Nueva contraseña
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

					<div className="">
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-start mt-4">
								<label htmlFor="exampleInputPassword12" style={{ color: "#006241" }}>
									Confirmar ontraseña
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-11 mx-auto d-flex justify-content-center">
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword12"
									style={{ borderColor: "#006241" }}
									required
									onChange={e => setConfirmarContraseña(e.target.value)}
									value={ConfirmarContraseña}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4 mb-5">
							<button
								type="submit"
								className="btn text-light fontKanit "
								style={{ backgroundColor: "#006241", width: "100%" }}>
								Ingresar
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};
