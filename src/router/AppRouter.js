import React, { useContext, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
	const { auth, verificarToken } = useContext(AuthContext);

	useEffect(() => {
		verificarToken();
	}, [verificarToken]);

	if (auth.checking) {
		return <h1>Espere por favor</h1>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/auth" component={AuthRouter} />
					<Route exact path="/" component={ChatPage} />

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
