import { useState } from 'react';
import Todo from './components/todo';  
import "./App.css";
import Search from './components/search';
import TodoForm from './components/TodoForm'; 

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', category: "trabalho", isCompleted: false},
    { id: 2, text: 'Learn React', category: "estudos", isCompleted: false},
    { id: 3, text: 'Learn React', category: "pessoal", isCompleted: false},
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map ((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1> Lista de tarefas </h1>
      <Search />
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/> 
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
