import React from 'react'
import {Input,Button,List} from 'antd'
const TodolistUI =(props)=>{
  return(
    <div style={{width:"320px",marginTop:"20px","marginLeft":"20px"}}>
      <Input
        value={this.state.inputValue}
        placeholder="Basic usage"
        style={{width:"220px",marginRight:"20px"}}
        onChange={e=>this.changeInputValue(e.target.value)}
      />
      <Button onClick={this.addList}>提交</Button>
      <hr/>
      <List
         bordered
         dataSource={this.state.list}
         renderItem={(item,index) => (<List.Item onClick={()=>this.delItem(index)}>{item}</List.Item>)}
       />
    </div>
  )
}
export default TodolistUI
