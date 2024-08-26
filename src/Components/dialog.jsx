import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ez fontos a hozzáférhetőség szempontjából

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
    // ... (változatlan)
  }

  function handleEditTask(e) {
    e.preventDefault();
    const updatedTask = {
      ...editingTask,
      name: editTaskNameRef.current.value,
      date: editTaskDateRef.current.value,
    };
    onEditTask(editingTask.id, updatedTask);
    setIsEditDialogOpen(false);
  }

  function openEditDialog(task) {
    setEditingTask(task);
    setIsEditDialogOpen(true);
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
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => openEditDialog(task)}>Edit</button>
          </li>
        ))}
      </ul>

      {/* Edit Task Dialog */}
      <Modal
        isOpen={isEditDialogOpen}
        onRequestClose={() => setIsEditDialogOpen(false)}
        contentLabel="Edit Task"
      >
        <h2>Edit Task</h2>
        <form onSubmit={handleEditTask}>
          <input
            type="text"
            defaultValue={editingTask?.name}
            ref={editTaskNameRef}
          />
          <input
            type="date"
            defaultValue={editingTask?.date}
            ref={editTaskDateRef}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditDialogOpen(false)}>Cancel</button>
        </form>
      </Modal>

      {/* Add New Task Form */}
      <form
        className="flex flex-col space-y-6 w-full max-w-md"
        onSubmit={handleAddNewTask}
      >
        {/* ... (változatlan) */}
      </form>
    </div>
  );
};

export default TaskList;
