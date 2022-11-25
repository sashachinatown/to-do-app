import React from 'react';
import ToDoElem from './ToDoElem';


const ToDoList = ({ tasks, removeTask, changeStatus, setUpdateTime}) => {
  return (
    <div>
        {tasks.map((task) => {
        return (
          <ToDoElem 
            task={task}
            key={task.id}
            changeStatus={changeStatus}
            removeTask={removeTask}
            setUpdateTime={setUpdateTime}
          />
        )  
      })}
    </div>
  )
}

export default ToDoList