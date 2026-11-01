import { useState } from 'react'
import { Check, Plus, ShoppingCart } from 'lucide-react'
import ProdutoBuscaModal from '../../components/ProdutoBuscarModal/ProdutoBuscaModal'
import PedidoItens from '../../components/PedidoItens/PedidoItens'
import type { Produto } from '../../types/Produto'
import { usePedido } from '../../hooks/usePedido'
import { formatarMoeda } from '../../utils/formatarMoeda'
import './NovoPedidoPage.css'
import type { Pedido } from '../../types/Pedido'
import { criarPedido as criarPedidoApi } from '../../services/pedidoService'

function NovoPedidoPage() {
  const [modalAberto, setModalAberto] = useState(false)
  const { itens, total, adicionar, alterarQuantidade, remover } = usePedido()

  function adicionarProduto(produto: Produto, quantidade: number) {
    adicionar(produto, quantidade)
    setModalAberto(false)
  }

function finalizarPedido() {
  const pedido: Pedido = {
    itens: itens.map((item) => ({
      produtoId: item.produto.produtoId,
      quantidade: item.quantidade,
    })),
  }

  criarPedidoApi(pedido);
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

      {itens.length === 0 ? (
        <div className="carrinho-vazio">
          <ShoppingCart size={40} />
          <h2>Seu pedido está vazio</h2>
          <p>Clique em "Adicionar produto" para começar.</p>
        </div>
      ) : (
        <>
          <PedidoItens
            itens={itens}
            onAlterarQuantidade={alterarQuantidade}
            onRemover={remover}
          />

          <div className="pedido-resumo">
            <div className="pedido-total">
              <span>Total do pedido</span>
              <strong>{formatarMoeda(total)}</strong>
            </div>
            <button className="btn-primary" onClick={finalizarPedido}>
              <Check size={18} /> Finalizar pedido
            </button>
          </div>
        </>
      )}

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
