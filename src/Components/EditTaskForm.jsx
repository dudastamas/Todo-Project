import { useState, useRef } from "react";

const EditTaskList = ({ tasks, onDelete, onEditTask }) => {
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
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          {editiTaskId === task.id ? (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-40">
              <dialog
                className="fixed top-[30%] left-1/2 transform -translate-x-1/2 w-1/3 h-1/3 flex justify-center items-center bg-white rounded-lg z-50 animate-[slideDown_0.3s_ease-out]"
                open
              >
                <form
                  className="felx flex-col"
                  onSubmit={(e) => handleEditTask(e, task.id)}
                >
                  <div className="mb-8 space-y-4">
                    <div>
                      <input
                        className=" border-2 p-1 border-[#99582a] rounded-md"
                        type="text"
                        defaultValue={task.name}
                        ref={editTaskNameRef}
                      />
                    </div>
                    <div>
                      <input
                        className=" border-2 p-1 border-[#99582a] rounded-md w-full"
                        type="date"
                        defaultValue={task.date}
                        ref={editTaskDateRef}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-10">
                    <button
                      className="text-[#e7ecef]  bg-[#936639] py-1 px-4 hover:bg-[#99582a]
          text-lg rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                    <button
                      className="text-[#e7ecef]  bg-[#936639] py-1 px-4 hover:bg-[#99582a]
          text-lg rounded-md"
                      onClick={() => setEditingTaskId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </dialog>
            </div>
          ) : (
            <div className="flex flex-col space-y-6 my-2 py-2 px-8  rounded-lg bg-[#432818] ">
              <div className="flex flex-col space-y-2 text-white">
                <p>Task: {task.name}</p>
                <p>Date: {task.date}</p>
              </div>

              <div className="flex flex-row justify-between">
                <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

export default EditTaskList;
