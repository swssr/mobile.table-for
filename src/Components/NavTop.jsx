import React from "react";
import { Link } from "react-router-dom";
import { useThemeDispatch } from "../context";
import { TOGGLE_SIDEBAR } from "../context/reducers";

export default function NavTop(props) {
	const themeDispatch = useThemeDispatch();
	return (
		<nav className="nav nav--top" {...props}>
			{props.children || (
				<>
					<button
						onClick={() => themeDispatch({ type: TOGGLE_SIDEBAR })}
						className="btn btn--icon"
					>
						<img
							className="icon"
							src="https://img.icons8.com/android/48/000000/menu.png"
							alt="menu icon"
						/>
					</button>
					<Link to="/">
						<img src="" alt="" className="img img--thumb" />
					</Link>
				</>
			)}
		</nav>
	);
}
