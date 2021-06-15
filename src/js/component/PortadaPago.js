import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import { Calendario } from "./Calendario";
import { Context } from "../store/appContext";

export const Portadapago = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="fontKanit d-flex justify-content-center flex-column">
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex  mt-5">
					<h3>Ingrese los datos para su entrega</h3>
				</div>
			</div>

			<div className="mr-5 ml-5 col-11 col-md-6 mx-auto justify-content-center">
				<div>
					<h5>Direccion:</h5>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios1"
						value="option1"
						checked
					/>

					<label className="form-check-label" htmlFor="exampleRadios1">
						option1
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios2"
						value="option2"
					/>
					<label className="form-check-label" htmlFor="exampleRadios2">
						option2
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios3"
						value="option3"
					/>
					<label className="form-check-label" htmlFor="exampleRadios3">
						option3
					</label>
				</div>
			</div>

			<div className="mr-5 ml-5 col-11 col-md-6 mx-auto justify-content-center mt-5">
				<h5>Fecha y hora:</h5>
			</div>

			<div className="form-row col-md-6 col-11 mx-auto d-flex justify-content-center mt-4">
				<Calendario />
			</div>
			<div className="row">
				<div className="col-md-6 col-11 mx-auto d-flex  mt-5">
					<h3>Ingrese sus datos de pago</h3>
				</div>
			</div>

			{/* <form className=" justify-content-center mr-5 ml-5 contact-form mt-5">
                <div className="mr-5 ml-5 col-11 col-md-6 mx-auto justify-content-center">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Numero de tarjeta</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            id="formGroupExampleInput"
                            style={{ color: "#006241" }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Nombre completo</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            id="formGroupExampleInput2"
                            style={{ color: "#006241" }}
                        />
                    </div>
                </div>

                <div className="form-row col-md-6 col-11 mx-auto d-flex justify-content-center mt-4">
                    <div className="form-group col-sm-6 col-md-6 col-lg-6 ">
                        <label style={{ color: "#006241" }}>Fecha de expiración</label>
                        <input
                            className="form-control"
                            name="telefono"
                            required
                            placeholder="MM/YY"
                            style={{ color: "#006241" }}
                        />
                    </div>

                    <div className="form-group col-sm-6 col-md-6  col-lg-6 ">
                        <label style={{ color: "#006241" }}>CVC</label>
                        <input
                            type="PIN"
                            className="form-control"
                            placeholder="***"
                            name="CVC"
                            required
                            style={{ color: "#006241" }}
                        />
                    </div>
                </div>
                <div className="row mb-5 mt-5">
                    <div className="col-md-6 col-11 mx-auto d-flex justify-content-center mt-4">
                        <button
                            type="submit"
                            className="btn text-light fontKanit "
                            style={{ backgroundColor: "#006241", width: "100%" }}>
                            Confirmar pago
						</button>
                    </div>
                </div>
            </form> */}
			<form action="https://3001-blush-llama-571iuzgp.ws-us09.gitpod.io/comprar" method="POST">
				<input type="hidden" value="Pago de carrito" name="title" />
				<input type="hidden" value={store.total} name="price" />
				<input
					type="submit"
					value="Comprar ahora"
					className="btn text-light fontKanit"
					style={{ backgroundColor: "#006241", width: "100%" }}
				/>
			</form>
		</div>
	);
};
