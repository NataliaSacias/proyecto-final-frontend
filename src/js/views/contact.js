import React, { useEffect } from "react";
import { PortadaContact } from "../component/PortadaContact";

export const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<PortadaContact />
		</div>
	);
};
