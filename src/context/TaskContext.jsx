import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext(); //Con esto se le da el nombre al contexto

export function TaskContextProvider(props) { //Luego debes crear su función 'Provider'
  const [tareas, setTareas] = useState([]);

  function createTask(tarea) {
    //Haciendo [...tareas, tarea] lo q hace es que al arreglo completo ...tareas se agregue al final el elemento 'tarea'
    //por ejm a:[1,2,3] al hacer ...a es igual a 1,2,3 ; y tras unirlo con [...a,4] quedaria: [1,2,3,4]
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id != id));
  }
  //Usando el useeffect para que cargue las tareas cuando se cargue el componete TaskList
  useEffect(() => {
    setTareas(data);
  }, []);

  /*Recuerda que {
            tareas :tareas,
            createTask : createTask,
            eliminarTarea :eliminarTarea,
        } es equivalente a :
        {
            tareas,
            createTask,
            eliminarTarea,
        } Cuando tienen el mismo nombre
  */
  return (
    <TaskContext.Provider
      value={{
        tareas,
        createTask,
        eliminarTarea,
      }}
    >
      {/* Con esto se indica que los demás elementos que estén dentro serán sus hijos */}
      {props.children}
    </TaskContext.Provider>
  );
}
