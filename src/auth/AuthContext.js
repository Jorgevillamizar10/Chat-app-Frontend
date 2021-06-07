import React, { createContext, useCallback, useState } from "react";
import { fetchSinToken } from "../helpers/fetch";

export const AuthContext = createContext();

//Estado inicial de la app
const initialState = {
	uid: null,
	checking: true, // bandera para saber si el usuario ya esta autenticado
	logged: false,
	name: null,
	email: null,
};

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState);
	const login = async (email, password) => {
		const resp = await fetchSinToken("login", { email, password }, "POST");

		if (resp.ok) {
			localStorage.setItem("token", resp.token);
			const { usuario } = resp;
			setAuth({
				uid: usuario.uid,
				checking: false,
				logged: true,
				name: usuario.nombre,
				email: usuario.email,
			});

			console.log("Autenticado");
		}

		return resp.ok;
	};
	const register = (nombre, email, password) => {};
	const verificarToken = useCallback(() => {}, []); // usamos el useCallback por que esta funcion sera llamada dentro de un useEffect y si usamos el formato normal de funcion va a consumir mucho espacio
	const logout = () => {};

	return (
		<AuthContext.Provider
			value={{ auth, login, register, verificarToken, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
