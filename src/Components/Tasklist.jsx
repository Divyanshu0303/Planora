import React from 'react'

export default function Tasklist({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          
          <div className="task-info">
            <span className="task-text">{task.text}</span>
            <div className="task-meta">
              {task.priority}, {task.category}
            </div>
          </div>

          <div className="task-actions">
            {task.completed ? (
              <button
                className="action-btn undo"
                onClick={() => toggleComplete(index)}
              >
                Undo
              </button>
            ) : (
              <button
                className="action-btn complete"
                onClick={() => toggleComplete(index)}
              >
                Complete
              </button>
            )}

            <button
              className="action-btn delete"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>

        </li>
      ))}
    </ul>
  );
}
