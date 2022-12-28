import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" >
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="Enter your task"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        
      />
      <textarea
        placeholder="Enter the description of your task"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2" autoFocus
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
