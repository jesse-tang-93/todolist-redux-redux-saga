import * as actionTypes from './constants'
const defaultState = {
  inputValue:"",
  list:[]
}
export default (state=defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  console.log(action)
  switch (action.type){
    case actionTypes.CHANGE_INPUT_VALUE:
      newState.inputValue = action.data
      console.log(newState)
      return newState
    case actionTypes.ADD_LIST:
      newState.list.push(newState.inputValue)
      newState.inputValue = ""
      return newState
    case actionTypes.DEL_ITEM:
        newState.list.splice(action.data,1)
        return newState
    case actionTypes.INIT_LIST:
        newState.list = action.data
        return newState
    case actionTypes.getAllList:
        newState.list = action.data
        return newState
    default:
      return state
  }
}
