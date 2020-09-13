import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useThemeDispatch } from "../context";
import { SET_SIDEBAR, TOGGLE_SIDEBAR } from "../context/reducers";

export default function Page(props) {
	const location = useLocation();
	const themeDispatch = useThemeDispatch();

	useEffect(() => themeDispatch({ type: SET_SIDEBAR, payload: false }), [
		location,
	]);
	return (
		<main
			onClick={() => themeDispatch({ type: SET_SIDEBAR, payload: false })}
			className="main"
			{...props}
		>
			{props.children}
		</main>
	);
}
