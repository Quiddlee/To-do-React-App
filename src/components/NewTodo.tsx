import React, { useRef } from "react";  
import './NewTodo.css';

interface NewTodoProps {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (textInputRef.current && textInputRef.current.value) {
            const enteredText = textInputRef.current.value;
            props.onAddTodo(enteredText);
            textInputRef.current.value = '';
        }
    };

    return <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input placeholder="Add a task..." type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">Add Todo</button>
    </form>;
};

export default NewTodo;