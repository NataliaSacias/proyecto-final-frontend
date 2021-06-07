import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { X } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/profile.scss";

export const ModalProfile = open => {
	const [isOpen, setIsOpen] = React.useState(false);

	const showModal = () => {
		setIsOpen(true);
	};

	const hideModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button type="button" className="btn-add-new" onClick={showModal}>
				+ Agregar nuevo domicilio
			</button>
			<Modal show={isOpen} onHide={hideModal} className="modal-container">
				<Modal.Header className="modal-header">
					<Modal.Title className="modal-title">Nueva dirección</Modal.Title>
					<button onClick={hideModal}>
						<X />
					</button>
				</Modal.Header>
				<Modal.Body className="modal-body">
					<input type="text" placeholder="Dirección *" className="form-control" />
					<div className="input-numero">
						<span>
							<label>S/N</label>
							<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
						</span>
						<input type="text" placeholder="Número " className="form-control" />
					</div>
					<input type="text" placeholder="Comentario" className="form-control" />
					<select className="form-control" aria-label="Default select example">
						<option selected>Departamento</option>
						<option value="1">Artigas</option>
						<option value="2">Canelones</option>
						<option value="3">Cerro Largo</option>
						<option value="4">Colonia</option>
						<option value="2">Durazno</option>
						<option value="3">Flores</option>
						<option value="1">Florida</option>
						<option value="2">Lavalleja</option>
						<option value="3">Maldonado</option>
						<option value="1">Montevideo</option>
						<option value="2">Paysandú</option>
						<option value="3">Río Negro</option>
						<option value="1">Rivera</option>
						<option value="2">Rocha</option>
						<option value="3">Salto</option>
						<option value="1">San José</option>
						<option value="2">Soriano</option>
						<option value="3">Tacuarembó</option>
						<option value="3">Treinta y Tres</option>
					</select>
				</Modal.Body>
				<Modal.Footer className="modal-footer">
					<button>Guardar</button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
