import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { Registro } from "./views/registro";
import injectContext from "./store/appContext";
import { Profile } from "./views/profile";
import { Contact } from "./views/contact";
import { Producto } from "./views/producto";
import Tienda from "./views/tienda";
import { Carrito } from "./views/carrito";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Recuperar } from "./views/Recuperar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/recuperar">
							<Recuperar />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/tienda">
							{/* <Single /> */}
							<Tienda />
						</Route>
						<Route exact path="/miperfil">
							<Profile />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/detalle">
							<Producto />
						</Route>
						<Route exact path="/carrito">
							<Carrito />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
