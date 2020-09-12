import React from "react";
import { AuthProvider } from "../context";

export default function (props) {
	return <AuthProvider>{props.children}</AuthProvider>;
}
