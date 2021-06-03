import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Imgbienvenidahome } from "../component/imgbienvenidahome";
import { SobreLanda } from "../component/SobreLanda";
import { ProductosDetacados } from "../component/ProductosDestacados";
import { PortadaLogin } from "../component/PortadaLogin";

export const Home = () => (
	<div>
		<Imgbienvenidahome />
		<SobreLanda />
		<ProductosDetacados />
		<PortadaLogin />
	</div>
);
