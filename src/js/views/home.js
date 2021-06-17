import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Imgbienvenidahome } from "../component/imgbienvenidahome";
import { SobreLanda } from "../component/SobreLanda";
import { ProductosDetacados } from "../component/ProductosDestacados";
import { PortadaLogin } from "../component/PortadaLogin";

export const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Imgbienvenidahome />
			<SobreLanda />
			<ProductosDetacados />
		</div>
	);
};
