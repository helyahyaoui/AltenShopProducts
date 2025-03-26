import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./js/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./js/store/AuthContext";

ReactDOM.render(
	<AuthContextProvider>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</AuthContextProvider>,
	document.getElementById("root")
);


reportWebVitals();
