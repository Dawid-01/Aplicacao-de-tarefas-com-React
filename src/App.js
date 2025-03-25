import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', category: "trabalho", isCompleted: false},
    { id: 2, text: 'Learn React', category: "estudos", isCompleted: false},
    { id: 3, text: 'Learn React', category: "pessoal", isCompleted: false},
  ]);

  return (
    <div className="App">
      <h1> Lista de tarefas </h1>
      <div className="todo-list">
        {todos.map((todo) => (  // Correção aqui
          <div className="todo" key={todo.id}> {/* Adicionado key={todo.id} */}
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">{todo.category}</p>
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
