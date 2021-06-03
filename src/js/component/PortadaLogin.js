import React, { Component } from "react";
import ImgPortada from "../../img/señora-login.jpg";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const PortadaLogin = () => (
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

		<form>
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
				<div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4 mb-5">
					<label className="form-check-label" htmlFor="exampleCheck1" style={{ color: "#006241" }}>
						¿Olvidaste tu contraseña?
					</label>
					<Link to="/" className="font-weight-bold" style={{ color: "#006241" }}>
						Click acá
					</Link>
				</div>
			</div>
		</form>
	</div>
);
