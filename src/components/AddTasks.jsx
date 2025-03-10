import { useState } from "react";

function AddTasks({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o título de sua tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição de sua tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(
              "Preencha o título e a descrição da sua tarefa antes de adicioná-la."
            );
          }
          addTask(title, description);
          setTitle("");
          setDescription(""); 
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
