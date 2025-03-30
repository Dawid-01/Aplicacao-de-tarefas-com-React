const Filter = ({ filter, setFilter, setSort })  => {
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompleted">Pendentes</option>
                   </select>
                </div>
                <div>
                    <p>Ordem alfabética</p>
                    <select>
                        <option onClick={() =>setSort("asc")} value="asc">A - Z</option>
                        <option onClick={() =>setSort("desc")} value="desc">Z - A</option>
                    </select>
                </div>
            </div>    
        </div>
    );
}
export default Filter;