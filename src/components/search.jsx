const search = ({search, setSearch}) => {
    return <div className="search">
        <h2> Pesquisar </h2>
        <input 
            type="text" 
            placeholder="Pesquise uma tarefa" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise uma tarefa"
        />
    </div>;
}
export default search;
