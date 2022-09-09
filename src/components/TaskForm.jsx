import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const manejadorSubmit = (e) => {
    e.preventDefault();
    createTask({
      titulo,
      descripcion,
    }); //Pues se definio asi: function createTask(tareaTitulo)
    setTitulo("");
    setDescripcion("");
  };
  //w-full para que abarque todo el ancho
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={manejadorSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-white text-2xl font-bold mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          autoFocus={true}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Ingresa una descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 px-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
