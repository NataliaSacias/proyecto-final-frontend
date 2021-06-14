import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { X } from "react-bootstrap-icons";
import "../../styles/profile.scss";

export const ModalCarrito = props => {
	return (
		<>
			<Modal show={props.modalShow} className="modal-container">
				<Modal.Body className="contenido-modal">
					<img src={props.foto} className="img-modal" />
					<p>
						¡El producto <span>{props.nombre}</span> <span>$ {props.precio}</span> fue agregado
						correctamente al carrito!
					</p>
				</Modal.Body>
				<Modal.Footer className="modal-footer">
					<button onClick={props.showModal}>Seguir comprando</button>
					<Link to="/carrito">Ir al carrito</Link>
				</Modal.Footer>
			</Modal>
		</>
	);
};

ModalCarrito.propTypes = {
	nombre: PropTypes.string,
	precio: PropTypes.number,
	foto: PropTypes.string,
	modalShow: PropTypes.func,
	showModal: PropTypes.func
};
