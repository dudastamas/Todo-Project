import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskList = ({ project, onAddTask, onEditTask, onDeleteTask }) => {
  // const [newTaskName, setNewTaskName] = useState("");
  // const [newTaskDate, setNewTaskDate] = useState("");

  // A isEditing state változó tárolja az éppen szerkesztés alatt álló task ID-ját. Ha null, akkor nincs szerkesztés alatt álló task.
  const [isEditing, setIsEditing] = useState(null);

  // Az editTaskName és editTaskDate state változók tárolják a szerkesztés alatt álló task nevét és dátumát.
  const [editTaskName, setEditTaskName] = useState("");
  const [editTaskDate, setEditTaskDate] = useState("");

  const newTaskNameRef = useRef();
  const newTaskDateRef = useRef();

  // const editTaskNameRef = useRef();
  // const editTaskDateRef = useRef();

  const handleAddTask = () => {
    const newTask = {
      id: uuidv4,
      taskName: newTaskNameRef.current.value,
      taskDate: newTaskDateRef.current.value,
    };
    onAddTask(newTask);
    newTaskNameRef.current.value = "";
    newTaskDateRef.current.value = "";
  };

  //   A startEditingTask függvény indítja el a szerkesztést:
  // Beállítja az isEditing értékét a szerkesztendő task ID-jára.
  // Az editTaskName és editTaskDate változókba betölti a szerkesztendő task adatait.
  const startEditingTask = (task) => {
    setIsEditing(task.id);
    setEditTaskName(task.taskName);
    setEditTaskDate(task.taskDate);
  };

  //   A handleSaveTask függvény menti a szerkesztett taskot:
  // Meghívja az onEditTask függvényt az új adatokkal.
  // Nullázza az isEditing értékét, kilépve a szerkesztési módból.
  const handleSaveTask = (taskId) => {
    onEditTask(taskId, { taskName: editTaskName, taskDate: editTaskDate });
    setIsEditing(null); // Kilépés a szerkesztési módból
  };

  // A törlés egyszerűbb: a handleTaskDelete függvény meghívja az onDeleteTask függvényt a törlendő task ID-jával.
  const handleTaskDelete = (taskId) => {
    onDeleteTask(taskId);
  };

  return (
    <div>
      {/* ------  Edit tasks -------------*/}
      <h2 className="text-xl font-bold">{project.projectName}</h2>
      <ul>
        {project.tasks.map((task) => (
          // A renderelés során a isEditing === task.id feltétel ellenőrzi, hogy az adott task szerkesztés alatt áll-e.
          <li key={task.id} className="mb-2">
            {isEditing === task.id ? (
              // Ha egy task szerkesztés alatt áll, input mezőket jelenít meg a task nevével és dátumával, valamint "Save" és "Cancel" gombokat.
              <>
                <input
                  className="border p-2 mr-2"
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                />
                <input
                  className="border p-2 mr-2"
                  type="date"
                  value={editTaskDate}
                  onChange={(e) => setEditTaskDate(e.target.value)}
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
                  {task.taskName} - {task.taskDate || task.date}
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
      {/* --------Add new task to the chosen project---------- */}
      <div className="mt-4">
        <input
          placeholder="New Task name"
          ref={newTaskNameRef}
          className="border p-2 mr-2"
        />
        <input type="date" ref={newTaskDateRef} className="border p-2 mr-2" />
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
