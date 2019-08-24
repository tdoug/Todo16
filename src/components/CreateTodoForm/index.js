import React, { useState } from 'react'

export default function CreateTodoForm({ addTodo }) {
    const [todoVal, updateVal] = useState();
    
    const handleAdd = e => {
        e.preventDefault();
        let newTodo = {
            'title': todoVal,
            'complete' : 0,
        }
        addTodo(newTodo);
    };

    return (
        <div>
            <form onSubmit={handleAdd}>
                <label>Todo description:</label>
                <input type='text' onChange={ e => updateVal(e.target.value) }/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}