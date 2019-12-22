const initialState = {
    collapsed: false
}

export const BookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MENU":
            state.collapsed = action.collapse;
            return { ...state }

        default:
            return state
    }

}
