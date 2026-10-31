import { useState } from 'react'
import { Plus, ShoppingCart } from 'lucide-react'
import ProdutoBuscaModal from '../../components/ProdutoBuscarModal/ProdutoBuscaModal'
import type { Produto } from '../../types/Produto'
import './NovoPedidoPage.css'

function NovoPedidoPage() {
  const [modalAberto, setModalAberto] = useState(false)

  function adicionarProduto(produto: Produto, quantidade: number) {
    console.log('adicionar:', produto.nome, quantidade)
    setModalAberto(false)
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Novo Pedido de Compra</h1>
          <p className="page-subtitle">Adicione os produtos ao seu pedido.</p>
        </div>
        <button className="btn-primary" onClick={() => setModalAberto(true)}>
          <Plus size={18} /> Adicionar produto
        </button>
      </div>

      <div className="carrinho-vazio">
        <ShoppingCart size={40} />
        <h2>Seu pedido está vazio</h2>
        <p>Clique em "Adicionar produto" para começar.</p>
      </div>

      {modalAberto && (
        <ProdutoBuscaModal
          onClose={() => setModalAberto(false)}
          onAdicionar={adicionarProduto}
        />
      )}
    </div>
  )
}

export default NovoPedidoPage
