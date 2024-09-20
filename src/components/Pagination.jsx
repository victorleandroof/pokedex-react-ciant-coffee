function Pagination({ page, totalPages, setPage }) {

    return(
      <div className="mt-3 text-center">
        <button 
          className="btn btn-primary" 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>
        <span className="mx-2">Página {page} de {totalPages}</span>
        <button 
          className="btn btn-primary" 
          disabled={page === totalPages} 
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </button>
    </div>
    )
  }
  
  export default Pagination;