import { useState } from 'react'
import Modal from '../Modal/Modal'
import SearchInput from '../SearchInput/SearchInput'
import ProdutoLista from '../ProdutoLista/ProdutoLista'
import ProdutoFooter from '../ProdutoFooter/ProdutoFooter'
import type { Produto } from '../../types/Produto'
import { buscarProdutos as buscarProdutosApi } from '../../services/produtoService'

type ProdutoBuscaModalProps = {
  onClose: () => void
  onAdicionar: (produto: Produto, quantidade: number) => void
}

function ProdutoBuscaModal({ onClose, onAdicionar }: ProdutoBuscaModalProps) {
  const [resultados, setResultados] = useState<Produto[]>([])
  const [selecionado, setSelecionado] = useState<Produto | null>(null)

  async function buscarProdutos(nome: string) {
    setSelecionado(null)

    if (!nome) {
      setResultados([])
      return
    }

    try {
      const produtos = await buscarProdutosApi(nome)
      setResultados(produtos)
    } catch {
      setResultados([])
    }
  }

  return (
    <Modal
      titulo="Adicionar produto"
      onClose={onClose}
      footer={
        selecionado && (
          <ProdutoFooter key={selecionado.produtoId} produto={selecionado} onAdicionar={onAdicionar} />
        )
      }
    >
      <SearchInput onSearch={buscarProdutos} placeholder="Buscar produto por nome..." />

      <ProdutoLista
        produtos={resultados}
        selecionadoId={selecionado?.produtoId ?? null}
        onSelecionar={setSelecionado}
      />
    </Modal>
  )
}

export default ProdutoBuscaModal
