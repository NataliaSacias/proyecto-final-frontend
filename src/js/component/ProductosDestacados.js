import React, { Component } from "react";
import { Card } from "./Card";
import "../../styles/home.scss";

export const ProductosDetacados = () => {
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
										nombre={"Name"}
										precio={555}
										id={1}
										imgUrl={
											"https://image.freepik.com/foto-gratis/muchas-verduras-pasillo-productos-agricolas-frescos-supermercado_199620-6243.jpg"
										}
									/>
								</div>
								<div className="carousel-item">
									<Card
										nombre={"Name"}
										precio={444}
										id={2}
										imgUrl={
											"https://image.freepik.com/foto-gratis/muchas-verduras-pasillo-productos-agricolas-frescos-supermercado_199620-6243.jpg"
										}
									/>
								</div>
								<div className="carousel-item">
									<Card
										nombre={"Name"}
										precio={233}
										id={3}
										imgUrl={
											"https://image.freepik.com/foto-gratis/muchas-verduras-pasillo-productos-agricolas-frescos-supermercado_199620-6243.jpg"
										}
									/>
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleControlsNoTouching"
								role="button"
								data-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true" />
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleControlsNoTouching"
								role="button"
								data-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true" />
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
									nombre={"Name"}
									precio={233}
									id={3}
									imgUrl={
										"https://image.freepik.com/foto-gratis/muchas-verduras-pasillo-productos-agricolas-frescos-supermercado_199620-6243.jpg"
									}
								/>
							</div>
							<div>
								<Card
									nombre={"Name"}
									precio={233}
									id={3}
									imgUrl={
										"https://image.freepik.com/foto-gratis/muchas-verduras-pasillo-productos-agricolas-frescos-supermercado_199620-6243.jpg"
									}
								/>
							</div>
							<div>
								<Card
									nombre={"Name"}
									precio={233}
									id={3}
									imgUrl={
										"https://image.freepik.com/foto-gratis/muchas-verduras-pasillo-productos-agricolas-frescos-supermercado_199620-6243.jpg"
									}
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
