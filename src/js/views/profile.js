import React, { useState } from "react";
import { ModalProfile } from "../component/ModalProfile";
import { CardDireccion } from "../component/CardDireccion";
import "../../styles/profile.scss";

export const Profile = () => {
	const [modalShowUp, setModalShowUp] = useState(false);

	return (
		<div className="profile-container">
			<h3>Mi perfil</h3>
			<form>
				<hr />
				<div className="datos-user-container">
					<h5>Datos de la cuenta</h5>
					<label htmlFor="inputPassword5" className="form-label">
						Mail *
					</label>
					<input type="text" className="form-control" aria-describedby="passwordHelpBlock" />

					<label htmlFor="inputPassword5" className="form-label">
						Contraseña *
					</label>
					<input type="password" className="form-control" aria-describedby="passwordHelpBlock" />
					<small>Los campos con * son requeridos</small>
				</div>
				<hr />
				<div className="datos-user-container">
					<h5>Datos personales</h5>
					<label htmlFor="inputPassword5" className="form-label">
						Nombre *
					</label>
					<input type="text" className="form-control" aria-describedby="passwordHelpBlock" />

					<label htmlFor="inputPassword5" className="form-label">
						Apellido *
					</label>
					<input type="password" className="form-control" aria-describedby="passwordHelpBlock" />
					<label htmlFor="inputPassword5" className="form-label">
						Teléfono *
					</label>
					<input type="password" className="form-control" aria-describedby="passwordHelpBlock" />
					<small>Los campos con * son requeridos</small>
				</div>
				<hr />
				<div className="direccion-container">
					<ModalProfile />
					<CardDireccion />
				</div>
				<div className="btn-container">
					<button type="button" className="btn btn-primary">
						Editar
					</button>
					<button type="button" className="btn btn-primary">
						Guardar
					</button>
				</div>
			</form>
		</div>
	);
};
