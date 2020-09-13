import { useState, useEffect } from "react";
import Axios from "axios";
import { API_URL } from "../config";

/**
 * @summary Handle input state changes
 * @returns new State
 * @param {any} ev - Input event
 * @param {any} state - Current state
 */
export const InputHandler = (ev, state) => ({
	...state,
	[ev.target.name]: ev.target.value,
});

export const commonHeaders = {
	"content-type": "application/json",
};

export const PostData = async (route, payload, headers) => {
	const store = localStorage.getItem("session");
	const { token } = store ? JSON.parse(store) : "";

	return await Axios.post(`${API_URL}${route}`, payload, {
		headers: { ...commonHeaders, ...headers, authorization: `Bearer ${token}` },
	});
};

export const fetcher = (url) =>
	Axios.get(`${API_URL}${url}`).then((r) => r.data);
