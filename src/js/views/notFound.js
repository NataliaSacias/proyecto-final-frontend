import React, { Component } from "react";
import Apple404 from "../../img/404_img.jpg";
import { Link } from "react-router-dom";
import "../../styles/notFound.scss";

export const Error = () => {
	return (
		<div className="error-container">
			<div className="error-content">
				<div className="header">
					<img src={Apple404} />
				</div>
				<p>Ups! La página a la que querés acceder no existe.</p>
				<Link to="/">
					<button className="btn-back">Volver al inicio</button>
				</Link>
			</div>
		</div>
	);
};
