import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { House } from "react-bootstrap-icons";

export const Breadcrumbs = props => {
	return (
		<Breadcrumb className="breadcrumb-container">
			<Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
			<Breadcrumb.Item href="/tienda">Tienda</Breadcrumb.Item>
			<Breadcrumb.Item active>{props.nombre}</Breadcrumb.Item>
		</Breadcrumb>
	);
};

Breadcrumbs.propTypes = {
	nombre: PropTypes.string
};
