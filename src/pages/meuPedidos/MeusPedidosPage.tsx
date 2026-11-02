import { useNavigate } from 'react-router'
import { ClipboardList, Plus } from 'lucide-react'
import './MeusPedidosPage.css'
import type { Pedido } from '../../types/Pedido'
import { listarPedidos } from '../../services/pedidoService'
import { useEffect, useState } from 'react'
import EmptyState from '../../components/EmptyState/EmptyState'
import PedidoTabela from '../../components/PedidoTabela/PedidoTabela'
import Paginacao from '../../components/Paginacao/Paginacao'

function MeusPedidosPage() {
  const navigate = useNavigate()
  const [pedidos, setPedidos] = useState<Pedido[]>([])
  const [pagina, setPagina] = useState(0)
  const [totalPaginas, setTotalPaginas] = useState(0)

  async function carregar(pagina: number) {
    try {
      const resposta = await listarPedidos(pagina)
      setPedidos(resposta.content)
      setTotalPaginas(resposta.totalPages)
    } catch {
      alert('Não foi possível carregar os pedidos.')
    }
  }

  function mudarPagina(novaPagina: number) {
    setPagina(novaPagina)
    carregar(novaPagina)
  }

  useEffect(() => {
    carregar(0)
  }, [])

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Meus Pedidos</h1>
          <p className="page-subtitle">Acompanhe seus pedidos de compras.</p>
        </div>
        <button className="btn-primary" onClick={() => navigate('/novo-pedido')}>
          <Plus size={18} /> Novo Pedido
        </button>
      </div>

      {pedidos.length > 0 ? (
        <>
          <PedidoTabela pedidos={pedidos} />
          <Paginacao pagina={pagina} totalPaginas={totalPaginas} onMudar={mudarPagina} />
        </>
      ) : (
        <EmptyState
          icone={<ClipboardList size={40} />}
          titulo="Nenhum pedido ainda"
          texto='Clique em "Novo Pedido" para fazer o primeiro.'
        />
      )}

    </div>
  )
}

export default MeusPedidosPage
