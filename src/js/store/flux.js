const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			productos: [],
			dataRegistro: [],
			dataLogin: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				try {
					const res = await fetch(process.env.BACKEND_URL + "/productos");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						productos: data
					});
				} catch (error) {
					console.log(error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			registro: async (email, contraseña, nombre, apellido) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					nombre: nombre,
					apellido: apellido,
					email: email,
					password: contraseña
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const res = await fetch(process.env.BACKEND_URL + "/user", requestOptions);
				const data = await res.json();
				console.log(data);
				setStore({
					dataRegistro: data
				});
			},
			login: async (email, contraseña) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: contraseña
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				const res = await fetch(process.env.BACKEND_URL + "/login", requestOptions);
				const data = await res.json();
				console.log(data);
				setStore({
					dataLogin: data
				});
			}
		}
	};
};

export default getState;
