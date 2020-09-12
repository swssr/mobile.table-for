export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const SET_CREDS = "SET_CREDS";

export function AuthReducer(state, action) {
	switch (action.type) {
		case REGISTER:
			return { ...state, user: action.payload, new: true };
		case LOGIN:
			return { ...state, user: action.payload };
		case SET_CREDS:
			return { ...state, ...action.payload };
		default:
			throw new Error();
	}
}
