import { Package, Search } from 'lucide-react'
import EmptyState from '../EmptyState/EmptyState'
import type { Produto } from '../../types/Produto'
import './ProdutoLista.css'

type ProdutoListaProps = {
  produtos: Produto[]
  selecionadoId: number | null
  onSelecionar: (produto: Produto) => void
}

function ProdutoLista({ produtos, selecionadoId, onSelecionar }: ProdutoListaProps) {
  if (produtos.length === 0) {
    return (
      <EmptyState
        icone={<Search size={48} />}
        titulo="Busque um produto"
        texto="Digite o nome do produto e pressione Enter."
      />
    )
  }

  return (
    <div className="produto-lista">
      {produtos.map((produto) => (
        <label
          key={produto.produtoId}
          className={`produto-item ${produto.produtoId === selecionadoId ? 'selecionado' : ''}`}
        >
          <input
            type="radio"
            name="produto"
            checked={produto.produtoId === selecionadoId}
            onChange={() => onSelecionar(produto)}
          />
          <div className="produto-icone">
            <Package size={22} />
          </div>
          <div className="produto-info">
            <strong>{produto.nome}</strong>
            <span>{produto.descricao}</span>
          </div>
          <span className="produto-estoque">Estoque: {produto.estoque}</span>
          <span className="produto-preco">
            {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </label>
      ))}
    </div>
  )
}

export default ProdutoLista
