import React from "react";

export default function Page(props) {
	return (
		<main className="main" {...props}>
			{props.children}
		</main>
	);
}
