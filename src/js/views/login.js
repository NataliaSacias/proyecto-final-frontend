import React, { useEffect } from "react";
import { PortadaLogin } from "../component/PortadaLogin";

export const Login = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<PortadaLogin />
		</div>
	);
};
