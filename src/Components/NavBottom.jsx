import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeDispatch } from "../context";
import { SET_SIDEBAR } from "../context/reducers";

export default function NavBottom() {
	const themeDispatch = useThemeDispatch();

	return (
		<nav className="nav nav--bottom">
			<ul>
				<li>
					<NavLink
						onClick={() => themeDispatch({ type: SET_SIDEBAR, payload: false })}
						exact
						className="nav__link"
						activeClassName="nav__link--active"
						to="/"
					>
						<img
							src="https://image.flaticon.com/icons/svg/3427/3427743.svg"
							alt="fork icon"
							className="icon"
						/>
						<span className="text">Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={() => themeDispatch({ type: SET_SIDEBAR, payload: false })}
						exact
						className="nav__link"
						activeClassName="nav__link--active"
						to="/nearby"
					>
						<img
							src="https://image.flaticon.com/icons/svg/684/684809.svg"
							alt="fork icon"
							className="icon"
						/>
						<span className="text">Nearby</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={() => themeDispatch({ type: SET_SIDEBAR, payload: false })}
						activeClassName="nav__link--active"
						exact
						className="nav__link"
						to="/reserved"
					>
						<img
							src="https://image.flaticon.com/icons/svg/1171/1171977.svg"
							alt="fork icon"
							className="icon"
						/>
						<span className="text">Reserved</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						onClick={() => themeDispatch({ type: SET_SIDEBAR, payload: false })}
						exact
						className="nav__link"
						activeClassName="nav__link--active"
						to="/saved"
					>
						<img
							src="https://img.icons8.com/ios/50/000000/bookmark-ribbon.png"
							alt="fork icon"
							className="icon"
						/>
						<span className="text">Saved</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
