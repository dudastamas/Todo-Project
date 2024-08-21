import React, { useState } from "react";

const TaskList = ({ project, onAddTask, onEditTask, onDeleteTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [isEditing, setIsEditing] = useState(null); // Task szerkesztési állapot kezelése
  const [editTaskName, setEditTaskName] = useState(""); // Szerkesztett task neve
  const [editTaskDate, setEditTaskDate] = useState(""); // Szerkesztett task dátuma

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      taskName: newTaskName,
      taskDate: newTaskDate,
    };
    onAddTask(newTask);
    setNewTaskName("");
    setNewTaskDate("");
  };

  const startEditingTask = (task) => {
    setIsEditing(task.id);
    setEditTaskName(task.taskName);
    setEditTaskDate(task.taskDate);
  };

  const handleSaveTask = (taskId) => {
    onEditTask(taskId, { taskName: editTaskName, taskDate: editTaskDate });
    setIsEditing(null); // Kilépés a szerkesztési módból
  };

  const handleTaskDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">{project.projectName}</h2>
      <ul>
        {project.tasks.map((task) => (
          <li key={task.id} className="mb-2">
            {isEditing === task.id ? (
              <>
                <input
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                  className="border p-2 mr-2"
                />
                <input
                  type="date"
                  value={editTaskDate}
                  onChange={(e) => setEditTaskDate(e.target.value)}
                  className="border p-2 mr-2"
                />
                <button
                  onClick={() => handleSaveTask(task.id)}
                  className="bg-green-500 text-white py-1 px-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(null)}
                  className="bg-gray-500 text-white py-1 px-2 rounded ml-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>
                  {task.taskName} - {task.taskDate}
                </span>
                <button
                  onClick={() => startEditingTask(task)}
                  className="ml-2 bg-blue-500 text-white py-1 px-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleTaskDelete(task.id)}
                  className="ml-2 bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="New Task Name"
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-green-500 text-white py-1 px-4 rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
