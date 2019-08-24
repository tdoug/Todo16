import React, { useState, useEffect } from 'react'
import Todo from '../Todo/';
import CreateTodoForm from '../CreateTodoForm/';

export default function List() {
    const [todos, updateTodos] = useState([]);

    useEffect(() => { console.log(todos) } );

    const addTodo = (newTodo) => {
        updateTodos([...todos, newTodo]);
    };

    const completeTodo = (thisTodo, index) => {
        todos[index].complete = 1;
        updateTodos([...todos]);
    };

    return ( <div>
            <h1>Todo List!</h1>
            <h3>Todos:</h3>
            <div>
                { 
                    todos.length ? todos.map((todo, index) =>
                        <Todo todo={ todo } key={ index } index={ index } completeTodo={completeTodo} />
                    ) : 'Empty!  Add a todo to see it in the list'
                }
            </div>
            <h3>Add Todo</h3>
            <div>
                <CreateTodoForm addTodo={addTodo} />
            </div>
        </div>
    )
}