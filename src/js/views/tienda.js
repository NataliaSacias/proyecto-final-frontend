import React, { useContext } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";
import { Breadcrumbs } from "../component/Breadcrumb";
import "../../styles/home.scss";

const Tienda = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<Breadcrumbs nombre={store.detalleProducto.nombre} />
			<div className="container container-tienda d-flex align-items-center flex-column">
				<h1 className="my-5 text-warning">Tienda</h1>
				<div className="row card-list">
					{store.productos.map((producto, i) => {
						return (
							<div className="col" key={i}>
								<Card
									nombre={producto.nombre}
									precio={producto.precio}
									id={producto.id}
									imgUrl={producto.fotoDePortada}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Tienda;
