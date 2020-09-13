export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export function ThemeReducer(state, action) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return { ...state, sidebarOpen: !state.sidebarOpen };
		default:
			throw new Error();
	}
}
