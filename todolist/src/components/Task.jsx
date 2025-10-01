import React, {memo} from "react";

const Task = memo(({ task, toggleTask, deleteTask }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </li>
    );
});