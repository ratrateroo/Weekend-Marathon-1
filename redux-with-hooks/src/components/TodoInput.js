import React, { useState } from 'react';

const TodoInput = () => {
    const [todo, setTodo] = useState('');
    const onChange = event => {
        setTodo(event.target.value);
    }

    return (
        <form onSubmit = { onSubmit }>
            <div className="form-div">
                <input 
                    type="text"
                    placeholder="Add a todo"
                    value={todo}
                    onChange={onChange}
                    />
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
}