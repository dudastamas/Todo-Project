import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import { root } from "postcss";
Modal.setAppElement("#root");

const TaskList = ({
  selectedProject,
  onAddNewTask,
  tasks,
  onDelete,
  onEditTask,
}) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

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

  function handleEditTask(e) {
    e.preventDefault();
    const taskToEdit = tasks.find((task) => task.id === editingTask);
    const updateTask = {
      ...taskToEdit,
      name: editTaskNameRef.current.value,
      date: editTaskDateRef.current.value,
    };
    onEditTask(editingTask, updateTask);
    setIsEditDialogOpen(false);
  }

  function openEditDialog(taskId) {
    setEditingTask(taskId);
    setIsEditDialogOpen(true);
  }

  const editTask = tasks.find((task) => task.id === editingTask);

  return (
    <div className="object-fit bg-[#7f4f24] p-4 flex flex-col space-y-2 items-center justify-center">
      <h3 className="text-white text-xl font-bold">
        Add new task for {selectedProject.name}
      </h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} Date: {task.date}
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => openEditDialog(task.id)}>Edit</button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isEditDialogOpen}
        onRequestClose={() => setIsEditDialogOpen(false)}
        contentLabel="Edit task"
      >
        <h2>Edit Task</h2>
        <form onSubmit={handleEditTask}>
          <input
            type="text"
            defaultValue={editTask?.name}
            ref={editTaskNameRef}
          />
          <input
            type="date"
            defaultValue={editTask?.date}
            ref={editTaskDateRef}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditDialogOpen(false)}>Cancel</button>
        </form>
      </Modal>

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
