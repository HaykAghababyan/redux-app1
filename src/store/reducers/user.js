const initialState = {
    
    userList: ['HAYK AGHABABYAN']
}

export function user(state = initialState, action) {

    switch (action.type) {
      case 'ADD_USER':
        return {
            ...state,
            userList: [...state.userList, action.data]
        }
      default:
        return state
    }
  }
  export function car(state = initialState, action) {

    switch (action.type) {
     
        case 'ADD_USER1':{
          return {
            ...state,
            userList:[...state.userList,action.data]
          }
        }
      default:
        return state
    }
  }