import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Paginacao.css'

type PaginacaoProps = {
    pagina: number
    totalPaginas: number
    onMudar: (pagina: number) => void
}

function Paginacao({ pagina, totalPaginas, onMudar }: PaginacaoProps) {
    if (totalPaginas <= 1) return null

    return (
        <div className="paginacao">
            <button className="btn-secundario" onClick={() => onMudar(pagina - 1)} disabled={pagina === 0}>
                <ChevronLeft size={18} /> Anterior
            </button>

            <span>Página {pagina + 1} de {totalPaginas}</span>

            <button className="btn-secundario" onClick={() => onMudar(pagina + 1)} disabled={pagina === totalPaginas - 1}>
                Próxima <ChevronRight size={18} />
            </button>
        </div>
    )
}

export default Paginacao
