import React, { useEffect, useState } from 'react'
import Tasklist from './Components/Tasklist'
import Taskform from './Components/Taskform'
import Progresstracker from './Components/Progresstracker'

import "./Style.css";


export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div>
      <header>
        <h1>Planora</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>

      <Taskform addTask={addTask} />
      <Tasklist
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <Progresstracker tasks={tasks}/>

      {tasks.length > 0 && (
        <button className='clear-btn' onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}
