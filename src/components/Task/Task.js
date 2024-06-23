import React from 'react';
import './Task.css';

const Task = ({ task, index, toggleTask, removeTask, editTask }) => {
  return (
    <li key={index} className={task.completed ? 'done' : ''}>
      <p>{task.text}</p>
      <button className="complete" onClick={() => toggleTask(index)}>
          {task.completed ? 'Undo' : 'Mark as Done'}
        </button>
        
        <button className="edit" onClick={() => editTask(index)}>
          Edit
        </button>
        <button className="remove" onClick={() => removeTask(index)}>
          Remove
        </button>      
    </li>
  );
};

export default Task;
