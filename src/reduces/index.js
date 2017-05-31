import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// test reducers
const hahaha = function(state = 'hahaha', action) {
    switch (action.type){
        case 'ADD_TODO':
            return 'xixixiaaa'
        case 'TOGGLE_TODO':
            return 'gagaga'
        default:
            return state
    }  
}

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  hahaha
})

export default todoApp