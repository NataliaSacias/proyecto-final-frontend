import React, { useState } from "react";
import "../../styles/cardDireccion.scss";

export const CardDireccion = () => {
	return (
		<div className="card-container">
			<ul>
				<li>
					Manuel D. Rodríguez <span>S/N</span>
				</li>
				<li>Casa verde con rejas amarillas y puertas rojas</li>
				<li>San José</li>
			</ul>
			<div className="card-btn">
				<button>Eliminar</button>
				<button>Editar</button>
			</div>
		</div>
	);
};
