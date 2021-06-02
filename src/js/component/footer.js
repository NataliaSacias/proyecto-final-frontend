import React, { Component } from "react";
import LogoNegativo from "../../img/logo_b&w.png";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer-container">
		<img src={LogoNegativo} />
		<ul className="footer-list">
			<li>
				<Link to="/">Tienda</Link>
			</li>
			<li>
				<Link to="/">Contacto</Link>
			</li>
			<li>
				<ul>
					<li>
						<Link to="/">Registro</Link>
					</li>
					<li>
						<Link to="/">Log in</Link>
					</li>
				</ul>
			</li>
		</ul>
		<p>
			Proyecto final - Grupo 6<span>Junio 2021</span>
		</p>
	</footer>
    
);
