import { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import Filter from './components/Filter';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (title, description) => {
    if (title && title.replace(/\s/gi, '')) {
      const newItem = {
        id: Math.random().toString(36).substring(2,10),
        title,
        description,
        pending: false,
        completed: false,
        date: new Date(),
        updateTime: 0
      }
      if (!description || !description.replace(/\s/gi, '')) {
        newItem.description = "Edit description";
      }
      setTasks([...tasks, newItem]);
    }
  }
 
  const removeTask = (id) => {
    setTasks([...tasks.filter(task => task.id !== id)])
  }

  const changeStatus = (id, status) => {
    setTasks([
      ...tasks.map((task) => {
        return task.id === id ? { ...task, [status]: !task[status]} : {...task};
      })
    ])
  }

  const setUpdateTime = (id) => {
    setTasks([
      ...tasks.map((task) => {
        return task.id === id ? { ...task, updateTime: new Date().getTime()} : {...task};
      })
    ])
  }

  const filterTasks = (tasks, filter) => {
    switch (filter.filter) {
        case 'all':
          return tasks
        case 'open':
          return tasks.filter(task => !task.pending && !task.completed)
        case 'pending':
          return tasks.filter(task => task.pending && !task.completed)
        case 'completed':
          return tasks.filter(task => task.completed)
        case 'byUpdate':
          return tasks.sort((a, b) => b.updateTime - a.updateTime);
        default:
            return tasks   
    }
}

  const onFilterSelect = (filter) => {
    setFilter({filter});
  }

  const visibleTasks = filterTasks(tasks, filter);

  return (
    <div className="App w-full mt-[5%] flex flex-col justify-center items-center">
      <header>
        <h1 className='text-2xl'>{`To-Do List (${tasks.length}):`}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      <Filter filter={filter} onFilterSelect={onFilterSelect}/>
      <ToDoList 
        tasks={visibleTasks}
        removeTask={removeTask}
        changeStatus={changeStatus}
        setUpdateTime={setUpdateTime}/>
    </div>
  );
}

export default App;
