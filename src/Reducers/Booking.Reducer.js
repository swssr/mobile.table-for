export const MAX_SEATS = 8;
export const MIN_SEATS = 0;

export function BookingReducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      if (state.seats + 1 > MAX_SEATS) return state;
      return { ...state, seats: state.seats + 1 };
    case "REMOVE_PERSON":
      if (state.seats - 1 < MIN_SEATS) return state;
      return { ...state, seats: state.seats - 1 };
    case "SET_PERSONS":
      if (state.seats - 1 < MIN_SEATS || state.seats + 1 > MAX_SEATS)
        return state;
      return { ...state, seats: +action.payload };
    case "SET_SPECIAL_NOTE":
      return { ...state, specialNote: action.payload };
    default:
      throw new Error();
  }
}
