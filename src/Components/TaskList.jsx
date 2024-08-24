import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({ project, onAddNewTask, tasks }) => {
  const taskNameRef = useRef();
  const taskDateRef = useRef();

  function handleAddNewTask(e) {
    e.preventDefault();

    const taskName = taskNameRef.current.value;
    const taskDate = taskDateRef.current.value;

    const newTask = {
      id: uuidv4(),
      name: taskName,
      date: taskDate,
      projectId: project.id,
    };

    onAddNewTask(newTask);
    taskNameRef.current.value = "";
    taskDateRef.current.value = "";
  }
  return (
    <div>
      <h3>Add new task for {project.name}</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} Date: {task.date}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddNewTask}>
        <div>
          <label htmlFor="text">Task name</label>
          <input type="text" id="taskName" ref={taskNameRef} />
        </div>
        <div>
          <label htmlFor="text">Date</label>
          <input type="date" id="taskDate" ref={taskDateRef} />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskList;
