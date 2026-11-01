import { Package, Trash2 } from 'lucide-react'
import QuantidadeInput from '../QuantidadeInput/QuantidadeInput'
import type { ItemPedido } from '../../types/ItemPedido'
import { formatarMoeda } from '../../utils/formatarMoeda'
import './PedidoItens.css'

type PedidoItensProps = {
  itens: ItemPedido[]
  onAlterarQuantidade: (produtoId: number, quantidade: number) => void
  onRemover: (produtoId: number) => void
}

function PedidoItens({ itens, onAlterarQuantidade, onRemover }: PedidoItensProps) {
  return (
    <div className="pedido-tabela">
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itens.map(({ produto, quantidade }) => (
            <tr key={produto.produtoId}>
              <td>
                <div className="pedido-produto">
                  <div className="pedido-icone">
                    <Package size={20} />
                  </div>
                  <div className="pedido-produto-info">
                    <strong>{produto.nome}</strong>
                    <span>{produto.descricao}</span>
                  </div>
                </div>
              </td>
              <td>
                <QuantidadeInput
                  valor={quantidade}
                  max={produto.estoque}
                  onChange={(valor) => onAlterarQuantidade(produto.produtoId, valor)}
                />
              </td>
              <td>{formatarMoeda(produto.preco)}</td>
              <td className="pedido-subtotal">{formatarMoeda(produto.preco * quantidade)}</td>
              <td>
                <button className="pedido-remover" onClick={() => onRemover(produto.produtoId)}>
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PedidoItens
