import React, { Component } from "react";
import img from "../../img/close-up-box-with-ripe-vegetables.jpg";

export const Imgbienvenidahome = () => (
	<div>
		<div className="card bg-dark text-white">
			<img src={img} className="card-img" alt="..." />
			<div className="card-img-overlay d-flex justify-content-center align-items-start flex-column ml-4">
				<h1 className="card-title text-dark fontKanit">Bienvenido</h1>
				<h2 className="card-text text-dark fontKanit text-left">
					En Landa te traemos los
					<br />
					alimentos más naturales y <br /> saludables
				</h2>
				<button
					type="button"
					className="btn text-light fontKanit p-3 px-5 mt-4 mr-4 mb-4"
					style={{ backgroundColor: "#EE7F11" }}>
					IR A LA TIENDA
				</button>
			</div>
		</div>
	</div>
);