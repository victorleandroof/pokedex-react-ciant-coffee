function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <input
            value={searchTerm}
            type='text'
            placeholder="buscar pokemon"
            onChange={e => setSearchTerm(e.target.value)}
        ></input>
    )
}

export default SearchBar;
