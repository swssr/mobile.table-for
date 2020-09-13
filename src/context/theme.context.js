import React, { createContext } from "react";

import { ThemeReducer } from "./reducers";

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

function ThemeProvider({ children }) {
	const [state, dispatch] = React.useReducer(ThemeReducer, {
		sidebarOpen: false,
		error: null,
	});
	return (
		<ThemeStateContext.Provider value={state}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</ThemeStateContext.Provider>
	);
}

function useThemeState() {
	const context = React.useContext(ThemeStateContext);
	if (context === undefined) {
		throw new Error("useThemeState must be within ThemeProvider");
	}
	return context;
}
function useThemeDispatch() {
	const context = React.useContext(ThemeDispatchContext);
	if (context === undefined) {
		throw new Error("useThemeDispatch must be within a ThemeProvider");
	}
	return context;
}

export { ThemeProvider, useThemeState, useThemeDispatch };
