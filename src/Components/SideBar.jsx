import React from "react";

import { Link } from "react-router-dom";
import { useAuthState, useThemeDispatch, useThemeState } from "../context";
import { SET_SIDEBAR } from "../context/reducers";

import profile from "../assets/user.svg";

export default function SideBar() {
	const themeState = useThemeState();
	const themeDispatch = useThemeDispatch();

	const authState = useAuthState();
	const { user } = authState;
	console.log(user);

	const handleLogout = () => {};
	return (
		<aside
			// onClick={() => themeDispatch({ type: SET_SIDEBAR, payload: false })}
			className={`sidebar ${themeState.sidebarOpen ? "sidebar--open" : ""}`}
		>
			{/* <img
				src={(user && user.picture) || profile}
				alt="user profile image"
				className="img img--thumb img--profile"
			/> */}
			<header>
				<h1>{(user && user.fullname) || "Homo Sepian"} </h1>
			</header>
			<ul className="sidebar__items">
				<li className="sidebar__item">
					{!user ? (
						<Link to="/login" className="link link--major">
							Login
						</Link>
					) : (
						<Link
							onClick={handleLogout}
							to="/logout"
							className="link link--major"
						>
							Logouts
						</Link>
					)}
				</li>
				<li className="sidebar__item">
					<Link to="/register" className="link link--major">
						Register
					</Link>
				</li>
				<li className="sidebar__item">
					<Link to="/" className="link link--major">
						Link 3
					</Link>
				</li>
				<li className="sidebar__item">
					<Link to="/" className="link link--major">
						Link 3
					</Link>
				</li>
				<li className="sidebar__item">
					<Link to="/" className="link link--major">
						Link 3
					</Link>
				</li>
				<li className="sidebar__item">
					<Link to="/" className="link link--major">
						Link 3
					</Link>
				</li>
			</ul>
			<button className="btn btn--bottom">LOGOUT</button>
		</aside>
	);
}
