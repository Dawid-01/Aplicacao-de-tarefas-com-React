import { useState } from 'react';
import Todo from './components/todo';  // Certifique-se que o nome do arquivo começa com maiúscula
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', category: "trabalho", isCompleted: false},
    { id: 2, text: 'Learn React', category: "estudos", isCompleted: false},
    { id: 3, text: 'Learn React', category: "pessoal", isCompleted: false},
  ]);

  return (
    <div className="app">
      <h1> Lista de tarefas </h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} /> 
        ))}
      </div>
    </div>
  );
}

export default App;
