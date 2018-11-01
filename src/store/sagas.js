import { takeEvery,put} from 'redux-saga/effects'
import * as actionTypes from './constants'
import * as actionCreators from './actionCreators'
import axios from 'axios'
function* getList(){
  try{
    const res = yield axios.get('/api/todolist.json')
    yield put(actionCreators.getAllList(res.data))
  }catch(e){
    console.log("获取失败")
  }
}
function* sagas(){
  yield takeEvery(actionTypes.INIT_LIST,getList)
}
export default sagas
