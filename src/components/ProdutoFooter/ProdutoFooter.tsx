import { useState } from 'react'
import { Package, ShoppingCart } from 'lucide-react'
import QuantidadeInput from '../QuantidadeInput/QuantidadeInput'
import type { Produto } from '../../types/Produto'
import { formatarMoeda } from '../../utils/formatarMoeda'
import './ProdutoFooter.css'

type ProdutoFooterProps = {
  produto: Produto
  onAdicionar: (produto: Produto, quantidade: number) => void
}

function ProdutoFooter({ produto, onAdicionar }: ProdutoFooterProps) {
  const [quantidade, setQuantidade] = useState(1)

  return (
    <div className="produto-footer">
      <div className="produto-footer-produto">
        <div className="produto-footer-icone">
          <Package size={20} />
        </div>
        <div className="produto-footer-info">
          <strong>{produto.nome}</strong>
          <span>{formatarMoeda(produto.preco)}</span>
        </div>
      </div>

      <QuantidadeInput valor={quantidade} max={produto.estoque} onChange={setQuantidade} />

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
