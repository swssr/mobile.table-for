import React from "react";

export default function CarouselImage({
	url,
	props,
	label,
	alt,
	wrapperProps,
	labelProps,
}) {
	return (
		<figure className="carousel-image" {...wrapperProps}>
			<img src={url || ""} alt={alt || ""} {...props} />
			<figcaption>
				<h3 {...labelProps}>{label}</h3>
			</figcaption>
		</figure>
	);
}
