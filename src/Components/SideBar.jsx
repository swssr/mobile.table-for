import React from "react";

import { Link } from "react-router-dom";
import { useThemeDispatch, useThemeState } from "../context";
import { SET_SIDEBAR } from "../context/reducers";

export default function SideBar() {
	const themeState = useThemeState();
	const themeDispatch = useThemeDispatch();
	return (
		<aside
			onClick={() => themeDispatch({ type: SET_SIDEBAR, payload: false })}
			className={`sidebar ${themeState.sidebarOpen ? "sidebar--open" : ""}`}
		>
			<ul className="sidebar__items">
				<li className="sidebar__item">
					<Link to="/login" className="link link--major">
						Link 1
					</Link>
				</li>
				<li className="sidebar__item">
					<Link to="/register" className="link link--major">
						Link 2
					</Link>
				</li>
				<li className="sidebar__item">
					<Link to="/" className="link link--major">
						Link 3
					</Link>
				</li>
			</ul>
		</aside>
	);
}
