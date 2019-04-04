import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';


 const store = createStore(reducer, applyMiddleware(thunk));
 store.dispatch({
     type:"ADD_USER",
     data: "Hayko"
 })
 store.dispatch({
    type:"ADD_USER1",
    data: "Axab"
})
 console.log(store.getState())
 export default store;