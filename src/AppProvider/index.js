import React from "react";
import { AuthProvider, ThemeProvider } from "../context";

export default function (props) {
	return (
		<ThemeProvider>
			<AuthProvider>{props.children}</AuthProvider>
		</ThemeProvider>
	);
}
