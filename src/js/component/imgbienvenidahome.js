import React, { Component } from "react";
import img from "../../img/close-up-box-with-ripe-vegetables.jpg";
import { Route, Link } from "react-router-dom";

export const Imgbienvenidahome = () => (
	<div>
		<div className="card bg-dark text-white" style={{ height: "100vh" }}>
			<img src={img} className="card-img" alt="..." height="100%" style={{ objectFit: "cover" }} />
			<div className="card-img-overlay d-flex justify-content-center align-items-start flex-column ml-5">
				<h1 className="card-title text-dark fontKanit">Bienvenido</h1>
				<h2 className="card-text text-dark fontKanit text-left">
					En Landa te traemos los
					<br />
					alimentos más naturales y <br /> saludables
				</h2>
				<Link
					to="/tienda"
					type="button"
					className="btn text-light fontKanit p-3 px-5 mt-4 mr-4 mb-4"
					style={{ backgroundColor: "#EE7F11" }}>
					IR A LA TIENDA
				</Link>
                
			</div>
		</div>
	</div>
);
