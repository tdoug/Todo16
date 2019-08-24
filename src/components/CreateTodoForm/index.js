import React from 'react'

export default function CreateTodoForm({ updateTodos }) {
    return (
        <div>
            <form onSubmit={null}>
                <label>Todo description:</label>
                <input type='text' />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}