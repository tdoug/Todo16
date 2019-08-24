import React from 'react';

export default function Todo({ todo, index, completeTodo }) {
    
    return (
        <div style={{ textDecoration: todo.complete ? "line-through" : "none" }} >{ todo.title }
            <button onClick={ () => { completeTodo(todo, index) } } >Complete</button>
        </div>
    )
}