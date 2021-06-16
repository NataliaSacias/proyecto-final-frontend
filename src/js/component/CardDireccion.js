import React, { useState } from "react";
import "../../styles/cardDireccion.scss";

export const CardDireccion = () => {
	return (
		<div className="card-container">
			<ul>
				<li>
					Manuel D. Rodríguez <span>651</span>
				</li>
				<li>Casa con rejas y patio al frente</li>
				<li>San José</li>
			</ul>
			<div className="card-btn">
				<button>Eliminar</button>
				<button>Editar</button>
			</div>
		</div>
	);
};
