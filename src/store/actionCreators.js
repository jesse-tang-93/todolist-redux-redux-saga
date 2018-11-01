import * as actionTypes from './constants'
// import axios from 'axios'
export const changeValue = (data)=>({
  type:actionTypes.CHANGE_INPUT_VALUE,
  data
})
export const addList = ()=>({
  type:actionTypes.ADD_LIST
})
export const delItem = (data)=>({
  type:actionTypes.DEL_ITEM,
  data
})
export const initList = (data)=>({
  type:actionTypes.INIT_LIST,
  data
})
// redux-thunk获取异步数据的方法
export const getAllList = (data)=>({
  type:actionTypes.getAllList,
  data
})
// export const getList = (data)=>{
//   return (dispatch)=>{
//     axios.get('./api/todolist.json').then(
//       res=>{
//         dispatch(getAllList(res.data))
//       }
//     ).catch(res=>console.log(res))
//   }
// }
