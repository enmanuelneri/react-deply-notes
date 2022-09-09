import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ tarea }) {
  const { eliminarTarea } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <div className="text-xl font-bold capitalize">{tarea.titulo}</div>
      <div className="text-gray-500 text-sm">{tarea.descripcion}</div>
      <button
        className="bg-red-500 px-2 py-2 rounded-md mt-4 hover:bg-red-400"
        onClick={() => eliminarTarea(tarea.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
