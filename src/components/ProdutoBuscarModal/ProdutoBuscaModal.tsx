import { useState } from 'react'
import Modal from '../Modal/Modal'
import SearchInput from '../SearchInput/SearchInput'
import ProdutoLista from '../ProdutoLista/ProdutoLista'
import ProdutoFooter from '../ProdutoFooter/ProdutoFooter'
import type { Produto } from '../../types/Produto'

const produtosMock: Produto[] = [
  { id: 1, nome: 'Galaxy A15', descricao: 'Smartphone Samsung 128GB', preco: 1099, estoque: 20 },
  { id: 2, nome: 'Galaxy S24', descricao: 'Smartphone Samsung 256GB', preco: 4999, estoque: 8 },
  { id: 3, nome: 'iPhone 15', descricao: 'Smartphone Apple 128GB', preco: 5799, estoque: 5 },
  { id: 4, nome: 'Redmi Note 13', descricao: 'Smartphone Xiaomi 128GB', preco: 1299, estoque: 15 },
  { id: 5, nome: 'Moto G84', descricao: 'Smartphone Motorola 256GB', preco: 1499, estoque: 0 },
  { id: 6, nome: 'Capinha Galaxy S24', descricao: 'Capa de silicone', preco: 49.9, estoque: 40 },
  { id: 7, nome: 'Capinha iPhone 15', descricao: 'Capa transparente', preco: 59.9, estoque: 30 },
  { id: 8, nome: 'Película Galaxy S24', descricao: 'Vidro temperado 3D', preco: 29.9, estoque: 50 },
  { id: 9, nome: 'Carregador USB-C 25W', descricao: 'Carregador rápido Samsung', preco: 89.9, estoque: 25 },
  { id: 10, nome: 'Galaxy S25', descricao: 'Smartphone Samsung', preco: 1999.9, estoque: 12 },
  { id: 11, nome: 'Galaxy S26', descricao: 'Smartphone Samsung', preco: 2199.9, estoque: 12 },
  { id: 12, nome: 'Galaxy S27', descricao: 'Smartphone Samsung', preco: 2299.9, estoque: 12 },
  { id: 13, nome: 'Galaxy S28', descricao: 'Smartphone Samsung', preco: 2499.9, estoque: 12 },
  { id: 14, nome: 'Galaxy S29', descricao: 'Smartphone Samsung', preco: 2699.9, estoque: 12 },
]

type ProdutoBuscaModalProps = {
  onClose: () => void
  onAdicionar: (produto: Produto, quantidade: number) => void
}

function ProdutoBuscaModal({ onClose, onAdicionar }: ProdutoBuscaModalProps) {
  const [resultados, setResultados] = useState<Produto[]>([])
  const [selecionado, setSelecionado] = useState<Produto | null>(null)

  function buscarProdutos(termo: string) {
    setSelecionado(null)

    if (!termo) {
      setResultados([])
      return
    }

    const filtrados = produtosMock.filter((produto) =>
      produto.nome.toLowerCase().includes(termo.toLowerCase()),
    )
    setResultados(filtrados)
  }

  return (
    <Modal
      titulo="Adicionar produto"
      onClose={onClose}
      footer={
        selecionado && (
          <ProdutoFooter key={selecionado.id} produto={selecionado} onAdicionar={onAdicionar} />
        )
      }
    >
      <SearchInput onSearch={buscarProdutos} placeholder="Buscar produto por nome..." />

      <ProdutoLista
        produtos={resultados}
        selecionadoId={selecionado?.id ?? null}
        onSelecionar={setSelecionado}
      />
    </Modal>
  )
}

export default ProdutoBuscaModal
