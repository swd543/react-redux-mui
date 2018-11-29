import { combineReducers } from 'redux'

const reducerAction = (state = {
    text: 'Hello World',
    name: 'Buga'
  }, action) => {
    switch (action.type) {
      case 'change':
        return {
          name: action.payload,
          text: 'Pla ' + action.payload
        };
      default:
        return state;
    }
  }
  
  const reducers = combineReducers({
      reducerAction
  })
  
  export default reducers;