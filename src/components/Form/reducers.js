const initialState = {
    user: {}

}


export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'NEW_USER':
            return {
                ...state,
                user: action.data
            }
        default: return state
    }
}