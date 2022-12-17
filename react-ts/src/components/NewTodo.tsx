import React, {useRef} from 'react';

interface NewTodoProps {
    addTodo: (text: string) => void
}

const NewTodo = (props: NewTodoProps) => {

    const textInputRef = useRef<HTMLInputElement>(null)
    // providing default value to null

    const todoSubmitHandler = (evt: React.FormEvent) => {
        evt.preventDefault()
        const enteredText = textInputRef.current?.value!
        props.addTodo(enteredText)
    }

  return (
    <div>
        <form onSubmit={todoSubmitHandler}>
            <label htmlFor="todo">Todo</label>
            <input type="text" id='todo' ref={textInputRef} />
            <button type='submit'>New Todo</button>
        </form>
    </div>
  );
};

export default NewTodo;
