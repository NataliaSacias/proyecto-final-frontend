import React, { useContext } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

const Tienda = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container d-flex align-items-center flex-column">
			<h1 className="my-5 text-warning">Tienda</h1>
			<div className="card-deck d-flex justify-content-center">
				{store.productos.map((producto, i) => {
					return (
						<Card
							key={i}
							nombre={producto.nombre}
							precio={producto.precio}
							id={producto.id}
							imgUrl={producto.fotoDePortada}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Tienda;
