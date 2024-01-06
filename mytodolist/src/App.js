import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails'; 
import { useState } from 'react';

function App() {
  const taskmainList = [
    { id: 1, name: 'Laptop', duration: 2000 },
    { id: 2, name: 'iPhone10S', duration: 56000 },
    { id: 3, name: 'Macbook Pro', duration: 7899 },
    { id: 4, name: 'Blackberry', duration: 9000 },
  ];

  const [taskList, setTaskList] = useState(taskmainList);

  const addItem = (taskName, taskDuration) => {
    var newTaskList = [...taskList];
    newTaskList.push({
      name: taskName,
      duration: taskDuration,
    });
    setTaskList(newTaskList);
  };

  return (
    <div>
      <Header></Header>
      <TaskForm addItem={addItem}></TaskForm>
      <TaskDetails taskList={taskList}></TaskDetails>
    </div>
  );
}

export default App;
