import React, { useState } from "react";

export default function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function handleAdd() {
        let trimmedTask = task.trim();
        if (trimmedTask === "") return;

        let updatedTodos = [...todos, trimmedTask];
        updatedTodos.sort();
        setTodos(updatedTodos);
        setTask("");
    }

    function handleDelete(indexToDelete) {
        let updatedTodos = todos.filter(function (todo, index) {
            return index !== indexToDelete;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
        <h2>Todo List</h2>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={function (e) {
                    setTask(e.target.value);
                }}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
            {todos.map(function (todo, index) {
                return (
                    <li key={index}>
                        {todo} <button onClick={function () { handleDelete(index); }}>Delete</button>
                    </li>
                );
            })}
            </ul>
        </div>
    );
}
