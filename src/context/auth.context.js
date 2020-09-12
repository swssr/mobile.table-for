import React, { createContext } from "react";

import { AuthReducer } from "./reducers";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

function AuthProvider({ children }) {
	const [state, dispatch] = React.useReducer(AuthReducer, { user: null });
	return (
		<AuthStateContext.Provider value={state}>
			<AuthDispatchContext.Provider value={dispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
}

function useAuthState() {
	const context = React.useContext(AuthStateContext);
	if (context === undefined) {
		throw new Error("useAuthState must be within AuthProvider");
	}
	return context;
}
function useAuthDispatch() {
	const context = React.useContext(AuthDispatchContext);
	if (context === undefined) {
		throw new Error("useAuthDispatch must be within a AuthProvider");
	}
	return context;
}

export { AuthProvider, useAuthState, useAuthDispatch };
