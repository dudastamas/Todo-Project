import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({
  selectedProject,
  onAddNewTask,
  tasks,
  onShowAddnewProject,
}) => {
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
      projectId: selectedProject.id,
    };

    onAddNewTask(newTask);
    taskNameRef.current.value = "";
    taskDateRef.current.value = "";
  }
  return (
    <div className="object-fit bg-[#7f4f24] p-4 flex flex-col space-y-2 items-center justify-center">
      <h3 className="text-white text-xl font-bold">
        Add new task for {selectedProject.name}
      </h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} Date: {task.date}
          </li>
        ))}
      </ul>
      <form
        className="flex flex-col space-y-6 w-full max-w-md"
        onSubmit={handleAddNewTask}
      >
        <div className="flex flex-col space-y-2 mx-auto w-full max-w-md">
          <label
            className="mx-auto text-white text-medium font-bold"
            htmlFor="text"
          >
            Task name:
          </label>
          <input
            className="rounded-lg h-10"
            type="text"
            id="taskName"
            ref={taskNameRef}
            required
          />
        </div>
        <div className="flex flex-col space-y-2 mx-auto w-full max-w-md">
          <label
            className="mx-auto text-white text-medium font-bold"
            htmlFor="text"
          >
            Date:
          </label>
          <input
            className="rounded-lg h-10"
            type="date"
            id="taskDate"
            ref={taskDateRef}
            required
          />
        </div>
        <button
          className="mx-auto text-white text-medium bg-[#432818] px-4  py-2 rounded-md "
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskList;
