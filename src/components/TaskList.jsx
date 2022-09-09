import TaskCard from './TaskCard';
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const {tareas,eliminarTarea } =useContext(TaskContext);

  //En caso no haya tareas que devuelva el sgt mensaje
  if (tareas.length === 0) {
    return <h1 className="text-white text-4xl font-bold mb-3 text-center">No hay tareas</h1>;
  }
  return (
    //gap-2 es como un espacio / p-4 es padding y rounded-md bordes redondeados
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default TaskList;
