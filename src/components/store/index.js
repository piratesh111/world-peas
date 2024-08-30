/* import {createStore, applyMiddleware, compose} from 'redux'
import {thunk} from 'redux-thunk'

const rootReducer = (state, action) =>{
    return state
}
const store = createStore(rootReducer,
    {
        items:[],
        totalAmount: 0

    },(applyMiddleware(thunk)))

export default store */