import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTaskForm = ({ onAddNewTask, selectedProject }) => {
  const newTaskNameRef = useRef();
  const newTaskDateRef = useRef();

  function handleAddNewTask(e) {
    e.preventDefault();

    const taskName = newTaskNameRef.current.value;
    const taskDate = newTaskDateRef.current.value;

    const newTask = {
      id: uuidv4(),
      name: taskName,
      date: taskDate,
      projectId: selectedProject.id,
    };

    onAddNewTask(newTask);
    newTaskNameRef.current.value = "";
    newTaskDateRef.current.value = "";
  }
  return (
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
          ref={newTaskNameRef}
          required
        />
        {/* </div>
                    <div className="flex flex-col space-y-2 mx-auto w-full max-w-md"> */}
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
          ref={newTaskDateRef}
          required
        />
      </div>
      <button
        className="mx-auto text-white text-medium bg-[#432818] px-4  py-2 rounded-md "
        type="submit  "
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
