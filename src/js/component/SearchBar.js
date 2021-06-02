import React from "react";
import { Link } from "react-router-dom";
import { List, PersonCircle, Search, Basket2Fill } from "react-bootstrap-icons";
import "../../styles/navbar.scss";

export const SearchBar = () => {
	return (
		<>
			<div className="search-bar">
				<Search className="icon" />
				<input name="name" placeholder="Buscar..." className="search-input" />
			</div>
            
		</>
	);
};
