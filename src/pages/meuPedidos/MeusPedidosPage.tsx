import { useNavigate } from 'react-router'
import { ClipboardList, Plus } from 'lucide-react'
import './MeusPedidosPage.css'
import type { Pedido } from '../../types/Pedido'
import { listarPedidos } from '../../services/pedidoService'
import { useEffect, useState } from 'react'
import EmptyState from '../../components/EmptyState/EmptyState'
import PedidoTabela from '../../components/PedidoTabela/PedidoTabela'

function MeusPedidosPage() {
  const navigate = useNavigate()
  const [pedidos, setPedidos] = useState<Pedido[]>([])

  async function carregar() {
    try {
      setPedidos(await listarPedidos())
    } catch {
      alert('Não foi possível carregar os pedidos.')
    }
  }

  useEffect(() => {
    carregar()
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
        <PedidoTabela pedidos={pedidos} />
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
