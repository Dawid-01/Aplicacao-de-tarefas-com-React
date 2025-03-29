import { useState } from "react";


const TodoForm = () => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!value || !category) return; // Verifica se os campos estão preenchidos
        setValue(''); // Limpa o campo 
        setCategory(''); 
        console.log(`Tarefa: ${value}, Categoria: ${category}`); 

    };
    return ( 
        
    <div className="todo-form">
        <h2> Criar uma Tarefa: </h2>    
        <form>
            <input type="text" placeholder="Digite o titulo" />
            <select>
                <option value="trabalho"> Trabalho </option>
                <option value="estudos"> Estudos </option>
                <option value="pessoal"> Pessoal </option>
            </select>
            <button className="submit-but" type="submit"> Criar </button>

        </form>
    </div>
    );
};

export default TodoForm;