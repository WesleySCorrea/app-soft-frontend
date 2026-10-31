import { useState } from 'react'
import { Minus, Package, Plus, ShoppingCart } from 'lucide-react'
import type { Produto } from '../../types/Produto'
import './ProdutoFooter.css'

type ProdutoFooterProps = {
  produto: Produto
  onAdicionar: (produto: Produto, quantidade: number) => void
}

function ProdutoFooter({ produto, onAdicionar }: ProdutoFooterProps) {
  const [quantidade, setQuantidade] = useState(1)

  return (
    <div className="footer">
      <div className="produto">
        <div className="icone">
          <Package size={20} />
        </div>
        <div className="info">
          <strong>{produto.nome}</strong>
          <span>
            {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>

      <div className="quantidade">
        <button onClick={() => setQuantidade(quantidade - 1)} disabled={quantidade <= 1}><Minus size={16} />
        </button>
        <span>{quantidade}</span>
        <button
          onClick={() => setQuantidade(quantidade + 1)} disabled={quantidade >= produto.estoque}><Plus size={16} />
        </button>
      </div>

      <button
        className="btn-primary"
        onClick={() => onAdicionar(produto, quantidade)}
        disabled={produto.estoque === 0}
      >
        <ShoppingCart size={18} /> Adicionar
      </button>
    </div>
  )
}

export default ProdutoFooter
