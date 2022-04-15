import React, { useState, useEffect } from 'react';
import Task from './components/Task'

// const CreateTask = ({ addTask }) => {
//   const [value, setValue] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTask(value);
//     setValue("");
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="input"
//         value={value}
//         placeholder="Add a new task"
//         onChange={e => setValue(e.target.value)}
//       />
//     </form>
//   );
// }

const App = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([]);

  const [value, setValue] = useState("");


  useEffect(() => {
    setTasksRemaining(tasks.filter(task => !task.completed).length)
  }, [tasks]);


  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  }


  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="header">Pending tasks ({tasksRemaining})</div>
      <div className="create-task" >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={value}
            placeholder="Add a new task"
            onChange={e => setValue(e.target.value)}
          />
        </form>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;