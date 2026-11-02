import { useNavigate } from 'react-router'
import { Plus } from 'lucide-react'
import './MeusPedidosPage.css'

function MeusPedidosPage() {
  const navigate = useNavigate()

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
    </div>
  )
}

export default MeusPedidosPage
