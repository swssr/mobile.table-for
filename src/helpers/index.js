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

export const PostData = async (route, payload, headers) =>
	await Axios.post(`${API_URL}${route}`, payload, {
		headers: { ...commonHeaders, ...headers },
	});
