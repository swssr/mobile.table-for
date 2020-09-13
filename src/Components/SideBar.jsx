import React from "react";
import { useThemeState } from "../context";

export default function SideBar() {
	const themeState = useThemeState();
	return (
		<aside
			className={`sidebar ${themeState.sidebarOpen ? "sidebar--open" : ""}`}
		></aside>
	);
}
