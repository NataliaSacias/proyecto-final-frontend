import React, { useState, useEffect, useContext } from "react";
import { ModalProfile } from "../component/ModalProfile";
import { CardDireccion } from "../component/CardDireccion";
import "../../styles/profile.scss";
import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	const [modalShowUp, setModalShowUp] = useState(false);

	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [contraseña, setContraseña] = useState("");

	const [editar, setEditar] = useState(false);

	useEffect(() => {
		actions.loadDatoPerfil();
	}, []);
	useEffect(
		() => {
			setNombre(store.datoPerfil.nombre);
			setApellido(store.datoPerfil.apellido);
			setEmail(store.datoPerfil.email);
			setContraseña(store.datoPerfil.password);
		},
		[store.datoPerfil]
	);

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
					<input
						type="text"
						className="form-control"
						aria-describedby="passwordHelpBlock"
						value={email}
						readOnly={!editar}
					/>

					<label htmlFor="inputPassword5" className="form-label">
						Contraseña *
					</label>
					<input
						type="password"
						className="form-control"
						aria-describedby="passwordHelpBlock"
						value={contraseña}
						readOnly={!editar}
					/>
					<small>Los campos con * son requeridos</small>
				</div>
				<hr />
				<div className="datos-user-container">
					<h5>Datos personales</h5>
					<label htmlFor="inputPassword5" className="form-label">
						Nombre *
					</label>
					<input
						type="text"
						className="form-control"
						aria-describedby="passwordHelpBlock"
						value={nombre}
						readOnly={!editar}
					/>

					<label htmlFor="inputPassword5" className="form-label">
						Apellido *
					</label>
					<input
						type="text"
						className="form-control"
						aria-describedby="passwordHelpBlock"
						value={apellido}
						readOnly={!editar}
					/>
					<small>Los campos con * son requeridos</small>
				</div>
				<div className="btn-container">
					{editar ? (
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								setEditar(false);
							}}>
							Guardar
						</button>
					) : (
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								setEditar(true);
							}}>
							Editar
						</button>
					)}
				</div>
				<hr />
				<div className="direccion-container">
					<ModalProfile />
					<CardDireccion />
				</div>
			</form>
		</div>
	);
};
