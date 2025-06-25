"use client";

import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
    setNewTask("");
  }

  function toggleTask(id: number) {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function editTask(id: number, newText: string) {
    setTasks(tasks.map(t => (t.id === id ? { ...t, text: newText } : t)));
  }

  return (
    <main className="min-h-screen bg-gradient-to-tr from-purple-50 via-indigo-50 to-blue-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-700 drop-shadow-md">
        מערכת ניהול משימות
      </h1>

      <div className="flex w-full max-w-xl mb-6 gap-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="הוסף משימה חדשה..."
          className="flex-grow px-4 py-3 rounded-lg shadow-md border border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
        />
        <button
          onClick={addTask}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 active:scale-95 transition-transform font-semibold"
          aria-label="Add task"
        >
          הוסף
        </button>
      </div>

      <ul className="w-full max-w-xl space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 group transition hover:shadow-xl"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-6 h-6 cursor-pointer accent-indigo-600 transition"
              aria-label={`סמן את המשימה '${task.text}' כהושלמה`}
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => editTask(task.id, e.target.value)}
              className={`flex-grow text-lg font-medium bg-transparent focus:outline-none ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
              aria-label={`ערוך את המשימה '${task.text}'`}
            />
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 opacity-0 group-hover:opacity-100 transition"
              aria-label="מחק משימה"
              title="מחק משימה"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
