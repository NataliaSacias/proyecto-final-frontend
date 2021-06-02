import React, { Component } from "react";
import señorimg from "../../img/señor_landa.jpg";
import canastaimg from "../../img/canasta_landa.jpg";

export const SobreLanda = () => (
	<div className="container">
		<div className="card my-3 border-0 fontKanit" style={{ maxWidth: "100%" }}>
			<div className="row no-gutters">
				<div className="col-md-6">
					<div
						className="card-body d-flex flex-column justify-content-between align-items-start"
						style={{ height: "100%" }}>
						<div>
							<h4 className="card-title" style={{ color: "#EE7F11" }}>
								Sobre Landa
							</h4>
						</div>
						<div>
							<h5>
								Nuestros orígenes:
								<br />
								cómo surgió landa
							</h5>
						</div>
						<div className="mt-auto">
							<h5 className="text-left">
								Landa nació apartir de una huerta familiar creada en el 2001. Ofrecemos productos
								certificados y producidos bajo procesos que son amigables con el medio ambiente y
								nuestra propia salud.
							</h5>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<img src={señorimg} alt="..." width="100%" />
				</div>
			</div>
		</div>
		<div className="card mb-3 border-0 fontKanit" style={{ maxWidth: "100%" }}>
			<div className="row no-gutters">
				<div className="col-md-6">
					<img src={canastaimg} alt="..." width="100%" />
				</div>
				<div className="col-md-6">
					<div
						className="card-body d-flex flex-column justify-content-between align-items-end"
						style={{ height: "100%" }}>
						<div>
							<h4 className="card-title text-right" style={{ color: "#EE7F11" }}>
								Nuestra misión
							</h4>
						</div>
						<div>
							<h5 className="text-right">
								Creemos en una mejor manera
								<br />
								de alimentarnos
							</h5>
						</div>
						<div className="mt-auto">
							<h5 className="text-right">
								Creemos en un sistema de producción más amigable con los recursos naturales y que
								produzca alimentos saludables, que no estén contaminados por agroquímicos que terminan
								afectando nuestra salud
							</h5>
                            
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
