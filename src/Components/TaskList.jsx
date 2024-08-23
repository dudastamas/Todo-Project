import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({ project, onAddNewTask }) => {
  const taskNameRef = useRef();
  const taskDateRef = useRef();

  function addNewTask(e) {
    e.preventDefault();

    const taskName = taskNameRef.current.value;
    const taskDate = taskDateRef.current.value;

    const newTask = {
      id: uuidv4(),
      name: taskName,
      date: taskDate,
    };

    onAddNewTask(newTask);
  }

  <div>
    <form onSubmit={addNewTask}>
      <div>
        <label htmlFor="text">Task name</label>
        <input type="text" ref={taskNameRef} />
      </div>
      <div>
        <label htmlFor="text">Project's name</label>
        <input type="date" ref={taskDateRef} />
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>;
};

export default TaskList;
