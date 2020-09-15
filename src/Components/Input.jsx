import React from "react";

export default function Input({
	name,
	label,
	type,
	placeholder,
	ref,
	onChange,
	...props
}) {
	return (
		<section className="input-wrapper">
			<label htmlFor={name}>{label}</label>
			<input
				name={name}
				id={name}
				type={type || "text"}
				className="input"
				placeholder={placeholder || ""}
				ref={ref}
				onChange={onChange}
				{...props}
			/>
		</section>
	);
}
