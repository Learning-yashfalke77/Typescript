import React, {useState} from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './todo.model';

function App() {

  const [todo, setTodo] = useState<Todo[]> ([]);

  const addTodo = (text: string) => {
    setTodo(prevTodo => [ ...prevTodo, {id: Math.random().toString(), text}])
  }

  const deleteTodo = (id: string) => {
    setTodo(prevTodo => prevTodo.filter(pt => !(pt.id === id)))
  }

  return (
    <div className="App">
      < TodoList todo={todo} deleteTodo={deleteTodo} />
      < NewTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
