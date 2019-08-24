import React, { useState } from 'react'
import Todo from '../Todo/';
import CreateTodoForm from '../CreateTodoForm/';

export default function List() {
    const [todos, updateTodos] = useState([]);

    return ( <div>
            <h1>Todo List!</h1>
            <h3>Todos:</h3>
            <div>
                { 
                    todos.length ? todos.map((todo, index) =>
                        <Todo key={ index } todo={ todo } updateTodos={updateTodos} />
                    ) : 'Empty!  Add a todo to see it in the list'
                }
            </div>
            <h3>Add Todo</h3>
            <div>
                <CreateTodoForm updateTodos={updateTodos} />
            </div>
        </div>
    )
}