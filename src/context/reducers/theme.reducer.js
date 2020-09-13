export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const SET_SIDEBAR = "SET_SIDEBAR";

export function ThemeReducer(state, action) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return { ...state, sidebarOpen: action.payload || !state.sidebarOpen };
		case SET_SIDEBAR:
			return { ...state, sidebarOpen: action.payload };
		default:
			throw new Error();
	}
}
