import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useAuthState, useThemeDispatch, useThemeState } from "../context";
import { SET_SIDEBAR } from "../context/reducers";

import profile from "../assets/user.svg";
import useSWR from "swr";
import { fetcher } from "../helpers";

export default function SideBar() {
	const themeState = useThemeState();
	const themeDispatch = useThemeDispatch();

	const authState = useAuthState();

	const { data: user } = useSWR("/auth/profile", fetcher);
	useEffect(() => {
		console.log({ user });
	}, [user]);

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
				<br />
				<br />
				<br />
				<h1>{(user && user.fullname) || "Human"} </h1>
			</header>
			<ul className="sidebar__items">
				<li className="sidebar__item">
					<span className="sidebar__item-icon"></span>
					<Link to="/" className="link link--major">
						Profile
					</Link>
				</li>
				<li className="sidebar__item">
					<span className="sidebar__item-icon"></span>
					<Link to="/" className="link link--major">
						Settings
					</Link>
				</li>
				<li className="sidebar__item">
					<span className="sidebar__item-icon"></span>
					<Link to="/register" className="link link--major">
						Register
					</Link>
				</li>
			</ul>
			{user ? (
				<button
					onClick={() => {
						if (profile) {
							window.confirm("Confirm to logout.") &&
								localStorage.setItem("session", "");
						} else {
							window.alert("Already logged out.");
							localStorage.setItem("session", "");
						}
					}}
					className="btn btn--bottom"
				>
					LOGOUT
				</button>
			) : (
				<Link to="/login" className="btn btn--bottom btn--primary">
					LOGIN
				</Link>
			)}
		</aside>
	);
}
