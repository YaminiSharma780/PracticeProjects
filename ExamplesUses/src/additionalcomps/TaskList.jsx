import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleSaveEdit = (task) => {
    onChangeTask({ ...task, text: newText });
    setEditingTaskId(null);
    setNewText("");
  };

  return (
    <ul className="reducer-ul">
      {tasks.map((task) => (
        <li key={task.id} className="reducer-li">
          <span>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onChangeTask({ ...task, done: !task.done })}
            />
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={newText || task.text}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
          </span>
          <span>
            {editingTaskId === task.id ? (
              <button onClick={() => handleSaveEdit(task)}>Save</button>
            ) : (
              <button
                onClick={() => {
                  setEditingTaskId(task.id);
                  setNewText(task.text);
                }}
              >
                Edit
              </button>
            )}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </span>
        </li>
      ))}
    </ul>
  );
}
