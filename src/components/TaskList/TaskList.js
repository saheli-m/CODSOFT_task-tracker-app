import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = ({ tasks, toggleTask, removeTask, editTask }) => {
  return (
    <ul id="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
