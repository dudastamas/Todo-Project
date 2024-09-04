import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "./AddTaskForm";
import EditTaskList from "./EditTaskForm";

const TaskList = ({
  selectedProject,
  onAddNewTask,
  tasks,
  onDelete,
  onEditTask,
}) => {
  return (
    <div className="object-fit bg-[#7f4f24] p-4 flex flex-col space-y-2 items-center justify-center">
      <h3 className="text-white text-xl font-bold">
        Add new task for {selectedProject.name}
      </h3>
      <ul className="w-full">
        <EditTaskList
          tasks={tasks}
          onDelete={onDelete}
          onEditTask={onEditTask}
        />
      </ul>

      {/****** * Add New Task ********* */}
      <AddTaskForm
        onAddNewTask={onAddNewTask}
        selectedProject={selectedProject}
      />
    </div>
  );
};

export default TaskList;
