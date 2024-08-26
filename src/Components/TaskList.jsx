import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({
  selectedProject,
  onAddNewTask,
  tasks,
  onDelete,
  onEditTask,
}) => {
  const [editiTaskId, setEditingTaskId] = useState(null);

  const newTaskNameRef = useRef();
  const newTaskDateRef = useRef();
  const editTaskNameRef = useRef();
  const editTaskDateRef = useRef();

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
      <ul>
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
              <>
                {task.name} Date: {task.date}
                <button onClick={() => onDelete(task.id)}>Delete</button>
                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/****** * Add New Task ********* */}
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
            ref={newTaskDateRef}
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
