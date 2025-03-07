import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar para criar um site.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Modificar site pessoal",
      description:
        "Modificar o site pessoal utilizando os conhecimentos adquiridos.",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
