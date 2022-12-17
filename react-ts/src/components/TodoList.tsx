import React from 'react';

interface TodoListProps {
    todo: {id: string, text: string} [] ;
    deleteTodo: (id: string) => void;
}

const TodoList = (props: TodoListProps) => {

  return (
    <div>
        <ol>
        {props.todo.map(t => (
            <li key={t.id}>
                <span>{t.text}</span>
                <button onClick={(evt) => (props.deleteTodo(t.id))}>Delete Todo</button>
            </li>
            ))}
        </ol>
    </div>
  );
};

export default TodoList;
