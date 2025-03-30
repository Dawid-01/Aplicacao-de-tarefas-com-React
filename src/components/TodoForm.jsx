import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue('');
        setCategory('');
        console.log(`Tarefa: ${value}, Categoria: ${category}`);
    };

    return ( 
        <div className="todo-form">
            <h2> Criar uma Tarefa: </h2>    
            <form onSubmit={handleSubmit}> {/* Corrigido para chamar handleSubmit */}
                <input 
                    type="text" 
                    placeholder="Digite o título" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                />
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="estudos">Estudos</option>
                    <option value="pessoal">Pessoal</option>
                </select>
                <button className="submit-but" type="submit"> Criar </button>
            </form>
        </div>
    );
};

export default TodoForm;
