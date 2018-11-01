import React,{ Component } from 'react'
import {Input,Button,List} from 'antd'
import store from './store'
import * as actionCreators from './store/actionCreators'
// ui部分
const TodolistUI =(props)=>{
  return (
    <div style={{width:"320px",marginTop:"20px","marginLeft":"20px"}}>
      <Input
        value={props.inputValue}
        placeholder="Basic usage"
        style={{width:"220px",marginRight:"20px"}}
        onChange={e=>props.changeInputValue(e.target.value)}
      />
      <Button onClick={props.addList}>提交</Button>
      <hr/>
      <List
         bordered
         dataSource={props.list}
         renderItem={(item,index) => (<List.Item onClick={()=>props.delItem(index)}>{item}</List.Item>)}
       />
    </div>
  )
}
// 逻辑部分
export default class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = store.getState()
    store.subscribe(this.changeStatus) // 订阅store的变化
  }
  componentDidMount(){
    store.dispatch(actionCreators.initList())
  }
  render(){
    return(
      <TodolistUI
        inputValue={this.state.inputValue}
        changeInputValue= {this.changeInputValue}
        addList={this.addList}
        list={this.state.list}
        delItem={this.delItem}
      />
    )
  }
  changeStatus =()=>{
    this.setState(store.getState())
  }
  changeInputValue = (value)=> {
    store.dispatch(actionCreators.changeValue(value))
  }
  addList = ()=> {
    store.dispatch(actionCreators.addList())
  }
  delItem = (index)=>{
    store.dispatch(actionCreators.delItem(index))
  }
}
