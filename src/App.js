import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      taskInput.value = '';
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  const editTask = (index) => {
    const newTaskText = prompt('Edit your task:', tasks[index].text);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      setTasks(
        tasks.map((task, i) => (i === index ? { ...task, text: newTaskText.trim() } : task))
      );
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Task Tracker App</h1>
      <div className="sect">
        <input type="text" id="new-task" placeholder="Add a new task" />
        <button className="add" onClick={addTask}>
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} editTask={editTask} />
    </div>
  );
};

export default App;

