import React from "react";
import { Link } from "react-router-dom";

export default function NavTop(props) {
	return (
		<nav className="nav nav--top" {...props}>
			{props.children || (
				<>
					<button className="btn btn--icon">
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
