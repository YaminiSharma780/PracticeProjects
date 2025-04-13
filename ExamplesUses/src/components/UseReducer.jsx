import { useReducer } from "react";
import AddTask from "../additionalcomps/AddTask";
import TaskList from "../additionalcomps/TaskList";
import { useMyTheme } from "../hooks/useMyTheme";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "change":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "delete":
      return tasks.filter((t) => t.id !== action.id);
    default:
  }
}

export default function UseReducer() {
  const [mode] = useMyTheme();
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(title) {
    dispatch({
      type: "add",
      id: tasks.length + 1,
      text: title,
    });
  }
  function handleChangeTask(task) {
    dispatch({
      type: "change",
      task: task,
    });
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: "delete",
      id: taskId,
    });
  }

  return (
    <div className={`main-container ${mode ? "dark" : ""}`}>
      <div className="reducer-container">
        <h1>useReducer()</h1>
        <div>
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
}
