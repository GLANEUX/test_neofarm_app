import { useState } from "react";

type ActionType = {
  id: number;
  name: string;
  comment?: string;
  deadline?: Date; // à afficher au format "17 Nov. 2024 @16h35"
  state: "todo" | "blocked" | "done";
};
const actions: ActionType[] = [
  {
    id: 1,
    name: "faire le ménage",
    state: "done",
  },
  {
    id: 2,
    name: "manger une Pomme",
    comment: "une granny",
    deadline: new Date(2025, 3, 5, 8, 25, 0, 0),
    state: "todo",
  },
];

export const HomePage = () => {
  const [taskList, setTaskList] = useState<ActionType[]>(actions);
  const [newTask, setNewTask] = useState<ActionType>({
    id: 0,
    name: "",
    comment: "",
    deadline: undefined,
    state: "todo",
  });

  const [editingTask, setEditingTask] = useState<ActionType | null>(null);


  const formatDate = (date?: Date) => {
    return date
      ? date
          .toLocaleString("fr-FR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace(":", "h")
      : "";
  };

  const removeAction = (id: number) => {
    setTaskList(taskList.filter((action) => action.id !== id));
  };

  const addTask = () => {
    if (!newTask.name.trim()) return;
    const newId =
      taskList.length > 0
        ? Math.max(...taskList.map((task) => task.id)) + 1
        : 1;
    const task: ActionType = {
      ...newTask,
      id: newId,
      deadline: newTask.deadline ? new Date(newTask.deadline) : undefined,
    };
    setTaskList([...taskList, task]);
    setNewTask({
      id: 0,
      name: "",
      comment: "",
      deadline: undefined,
      state: "todo",
    });
  };

  const editTask = (task: ActionType) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask: ActionType) => {
    setTaskList(
      taskList.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };


  return (
    <div>
      <h2>Todo List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Commentaire</th>
            <th>Deadline</th>
            <th>État</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((action) => (
            <tr key={action.id}>
              <td>{action.id}</td>
              <td>{action.name}</td>
              <td>{action.comment}</td>
              <td>{formatDate(action.deadline)}</td>
              <td>{action.state}</td>
              <td>
                <button onClick={() => editTask(action)}>Modifier</button>
                <button onClick={() => removeAction(action.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Ajouter une tâche</h3>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={newTask.name}
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Commentaire"
        value={newTask.comment}
        onChange={(e) => setNewTask({ ...newTask, comment: e.target.value })}
      />
      <input
        type="datetime-local"
        value={
          newTask.deadline ? newTask.deadline.toISOString().slice(0, -8) : ""
        }
        onChange={(e) =>
          setNewTask({
            ...newTask,
            deadline: e.target.value ? new Date(e.target.value) : undefined,
          })
        }
      />
      <div>
        <label>
          <input
            type="radio"
            name="state"
            value="todo"
            checked={newTask.state === "todo"}
            onChange={() => setNewTask({ ...newTask, state: "todo" })}
          />
          To-Do
        </label>
        <label>
          <input
            type="radio"
            name="state"
            value="blocked"
            checked={newTask.state === "blocked"}
            onChange={() => setNewTask({ ...newTask, state: "blocked" })}
          />
          Bloqué
        </label>
        <label>
          <input
            type="radio"
            name="state"
            value="done"
            checked={newTask.state === "done"}
            onChange={() => setNewTask({ ...newTask, state: "done" })}
            required
          />
          Fait
        </label>
      </div>
      <button onClick={addTask}>Ajouter</button>

      {editingTask && (
        <div>
          <h3>Modifier une tâche</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateTask(editingTask);
            }}
          >
            <input
              type="text"
              value={editingTask.name}
              onChange={(e) =>
                setEditingTask({ ...editingTask, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editingTask.comment || ""}
              onChange={(e) =>
                setEditingTask({ ...editingTask, comment: e.target.value })
              }
            />
            <input
              type="datetime-local"
              value={
                editingTask.deadline
                  ? editingTask.deadline.toISOString().slice(0, -8)
                  : ""
              }
              onChange={(e) =>
                setEditingTask({
                  ...editingTask,
                  deadline: e.target.value
                    ? new Date(e.target.value)
                    : undefined,
                })
              }
            />
            <div>
              <label>
                <input
                  type="radio"
                  name="state"
                  value="todo"
                  checked={editingTask.state === "todo"}
                  onChange={() =>
                    setEditingTask({ ...editingTask, state: "todo" })
                  }
                />
                To-Do
              </label>
              <label>
                <input
                  type="radio"
                  name="state"
                  value="blocked"
                  checked={editingTask.state === "blocked"}
                  onChange={() =>
                    setEditingTask({ ...editingTask, state: "blocked" })
                  }
                />
                Bloqué
              </label>
              <label>
                <input
                  type="radio"
                  name="state"
                  value="done"
                  checked={editingTask.state === "done"}
                  onChange={() =>
                    setEditingTask({ ...editingTask, state: "done" })
                  }
                />
                Fait
              </label>
            </div>
            <button type="submit">Modifier</button>
          </form>
        </div>
      )}
    </div>
  );
};
