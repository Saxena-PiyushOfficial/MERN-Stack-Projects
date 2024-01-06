import React from 'react'
import TaskDetails from './TaskDetails'
export default function TaskList(props) {
  return (
    props.taskList.length>0 ?
      props.taskList.map((task,i)=>{
        return <TaskDetails task={task} key={i}  index={i}></TaskDetails> 
      }):"No Data Available"
  
  )
}
