import React, { Component, useContext, useEffect } from "react";
import { Card } from "./Card";
import "../../styles/home.scss";

import { Context } from "../store/appContext";

export const ProductosDetacados = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="">
				<div className="carrousel">
					<div className="d-flex justify-content-center align-items-center flex-column fontKanit">
						<h3 style={{ color: "#006241" }} className="text-center">
							Productos destacados
						</h3>
						<h5 style={{ color: "#EE7F11" }} className="text-center">
							Los mejores productos de estación
						</h5>
						<div
							id="carouselExampleControlsNoTouching"
							className="carousel slide p-3"
							data-touch="true"
							data-interval="false">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<Card
										nombre={store.productos[0] ? store.productos[0].nombre : "Cargando"}
										precio={store.productos[0] ? store.productos[0].precio : 0}
										id={store.productos[0] ? store.productos[0].id : 0}
										imgUrl={store.productos[0] ? store.productos[0].fotoDePortada : "no diponible"}
									/>
								</div>
								<div className="carousel-item">
									<Card
										nombre={store.productos[1] ? store.productos[1].nombre : "Cargando"}
										precio={store.productos[1] ? store.productos[1].precio : 0}
										id={store.productos[1] ? store.productos[1].id : 0}
										imgUrl={store.productos[1] ? store.productos[1].fotoDePortada : "no diponible"}
									/>
								</div>
								<div className="carousel-item">
									<Card
										nombre={store.productos[2] ? store.productos[2].nombre : "Cargando"}
										precio={store.productos[2] ? store.productos[2].precio : 0}
										id={store.productos[2] ? store.productos[2].id : 0}
										imgUrl={store.productos[2] ? store.productos[2].fotoDePortada : "no diponible"}
									/>
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleControlsNoTouching"
								role="button"
								data-slide="prev">
								<span className="carousel-control-prev-icon bg-secondary" aria-hidden="true" />
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleControlsNoTouching"
								role="button"
								data-slide="next">
								<span className="carousel-control-next-icon bg-secondary" aria-hidden="true" />
								<span className="sr-only">Next</span>
							</a>
						</div>
						<h5 className="m-2 text-center" style={{ color: "#006241" }}>
							Todos nuestros productos cuentan con Certificación de la Red de Agroecología Nacional
						</h5>
					</div>
				</div>
				<div className="vista-lista">
					<div className="p-3">
						<h3 style={{ color: "#006241" }} className="text-center">
							Productos destacados
						</h3>
						<h5 style={{ color: "#EE7F11" }} className="text-center">
							Los mejores productos de estación
						</h5>
						<div className="d-flex justify-content-around align-items-center p-3">
							<div>
								<Card
									nombre={store.productos[0] ? store.productos[0].nombre : "Cargando"}
									precio={store.productos[0] ? store.productos[0].precio : 0}
									id={store.productos[0] ? store.productos[0].id : 0}
									imgUrl={store.productos[0] ? store.productos[0].fotoDePortada : "no diponible"}
								/>
							</div>
							<div>
								<Card
									nombre={store.productos[1] ? store.productos[1].nombre : "Cargando"}
									precio={store.productos[1] ? store.productos[1].precio : 0}
									id={store.productos[1] ? store.productos[1].id : 0}
									imgUrl={store.productos[1] ? store.productos[1].fotoDePortada : "no diponible"}
								/>
							</div>
							<div>
								<Card
									nombre={store.productos[2] ? store.productos[2].nombre : "Cargando"}
									precio={store.productos[2] ? store.productos[2].precio : 0}
									id={store.productos[2] ? store.productos[2].id : 0}
									imgUrl={store.productos[2] ? store.productos[2].fotoDePortada : "no diponible"}
								/>
							</div>
						</div>
						<h5 className="m-2 text-center" style={{ color: "#006241" }}>
							Todos nuestros productos cuentan con Certificación de la Red de Agroecología Nacional
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
