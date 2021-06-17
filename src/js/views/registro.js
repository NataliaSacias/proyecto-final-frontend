import React, { useEffect } from "react";
import { PortadaRegistro } from "../component/PortadaRegistro";

export const Registro = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<PortadaRegistro />
		</div>
	);
};
