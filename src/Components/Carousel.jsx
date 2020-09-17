import React, { useState } from "react";
import RandomImage from "./RandomImage";

export default function Carousel({ images }) {
	const [mock, set] = useState([1, 2, 3, 4, 5]);
	return (
		<ul className="carousel">
			{(images || mock).map((url) => (
				<figure className="carousel-image">
					<RandomImage />
					<figcaption></figcaption>
				</figure>
			))}
		</ul>
	);
}
