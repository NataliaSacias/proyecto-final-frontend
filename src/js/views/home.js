import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Imgbienvenidahome } from "../component/imgbienvenidahome";
import { SobreLanda } from "../component/SobreLanda";
import { ProductosDetacados } from "../component/ProductosDestacados";

export const Home = () => (
	<div>
		<Imgbienvenidahome />
		<SobreLanda />
		<ProductosDetacados />
        
	</div>
);
