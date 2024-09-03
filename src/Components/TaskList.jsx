import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "./AddTaskForm";

const TaskList = ({
  selectedProject,
  onAddNewTask,
  tasks,
  onDelete,
  onEditTask,
}) => {
  const [editiTaskId, setEditingTaskId] = useState(null);

  const editTaskNameRef = useRef();
  const editTaskDateRef = useRef();

  function handleEditTask(e, taskId) {
    e.preventDefault();
    const updateTask = {
      name: editTaskNameRef.current.value,
      date: editTaskDateRef.current.value,
    };
    onEditTask(taskId, updateTask);
    setEditingTaskId(null);
  }

  return (
    <div className="object-fit bg-[#7f4f24] p-4 flex flex-col space-y-2 items-center justify-center">
      <h3 className="text-white text-xl font-bold">
        Add new task for {selectedProject.name}
      </h3>
      <ul className="w-full">
        {tasks.map((task) => (
          <li key={task.id}>
            {editiTaskId === task.id ? (
              <form onSubmit={(e) => handleEditTask(e, task.id)}>
                <input
                  type="text"
                  defaultValue={task.name}
                  ref={editTaskNameRef}
                />
                <input
                  type="date"
                  defaultValue={task.date}
                  ref={editTaskDateRef}
                />
                <button type="submit">Save</button>
                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
              </form>
            ) : (
              <div className="flex flex-col space-y-6 my-2 py-2 px-8  rounded-lg bg-[#432818] ">
                <div className="flex flex-col space-y-2 text-white">
                  <p>Task: {task.name}</p>
                  <p>Date: {task.date}</p>
                </div>

                <div className="flex flex-row justify-between">
                  <button onClick={() => setEditingTaskId(task.id)}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
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
