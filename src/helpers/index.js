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

export const PostData = async (route, payload, _headers) => {
	const store = localStorage.getItem("session");
	let headers = {};
	if (store) {
		const {
			data: { token },
		} = store ? JSON.parse(store) : "";

		headers = {
			...commonHeaders,
			..._headers,
			authorization: `Bearer ${token}`,
		};
	}

	return await Axios.post(`${API_URL}${route}`, payload, {
		headers,
	});
};

export const fetcher = (url) => {
	const store = localStorage.getItem("session");
	const {
		data: { token },
	} = store ? JSON.parse(store) : "";

	console.log({ token });
	return Axios.get(`${API_URL}${url}`, {
		headers: { ...commonHeaders, authorization: `Bearer ${token}` },
	}).then((r) => r.data);
};

export const baseFetcher = async (url) =>
	await Axios.get(`${API_URL}${url}`).then((r) => r.data);
