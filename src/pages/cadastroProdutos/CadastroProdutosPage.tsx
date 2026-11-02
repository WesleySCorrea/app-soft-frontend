import { Plus, Search } from 'lucide-react'
import './CadastroProdutoPage.css'
import { useState } from 'react'
import ProdutoFormModal from '../../components/ProdutoEditModal/ProdutoEditModal'
import type { Produto } from '../../types/Produto'
import { atualizarProduto, buscarProdutos, criarProduto } from '../../services/produtoService'
import EmptyState from '../../components/EmptyState/EmptyState'
import SearchInput from '../../components/SearchInput/SearchInput'
import ProdutoTabela from '../../components/ProdutoTabela/ProdutoTabela'

function CadastroProdutosPage() {
    const [modalAberto, setModalAberto] = useState(false)
    const [produtoEditando, setProdutoEditando] = useState<Produto | null>(null)
    const [produtos, setProdutos] = useState<Produto[]>([])
    const [termo, setTermo] = useState('')

    async function salvarProduto(dados: Omit<Produto, 'produtoId'>) {
        try {
            if (produtoEditando) {
                await atualizarProduto(produtoEditando.produtoId, dados)
            } else {
                await criarProduto(dados)
            }
            setModalAberto(false)
        } catch {
            alert('Não foi possível salvar o produto.')
        }
    }

    async function pesquisar(novoTermo: string) {
        setTermo(novoTermo)
        if (!novoTermo) {
            setProdutos([])
            return
        }
        try {
            setProdutos(await buscarProdutos(novoTermo))
        } catch {
            alert('Não foi possível buscar os produtos.')
        }
    }

    function abrirNovo() {
        setProdutoEditando(null)
        setModalAberto(true)
    }

    function abrirEdicao(produto: Produto) {
        setProdutoEditando(produto)
        setModalAberto(true)
    }

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Produtos</h1>
                    <p className="page-subtitle">Gerencie o cadastro de Produtos.</p>
                </div>
                <button className="btn-primary" onClick={abrirNovo}>
                    <Plus size={18} /> Adicionar produto
                </button>
            </div>

            <div className="produtos-busca">
                <SearchInput placeholder="Buscar produto pelo nome..." onSearch={pesquisar} />
            </div>

            {produtos.length > 0 ? (
                <ProdutoTabela produtos={produtos} onEditar={abrirEdicao} />
            ) : (
                <EmptyState
                    icone={<Search size={40} />}
                    titulo={termo ? 'Nenhum produto encontrado' : 'Busque um produto'}
                    texto={termo ? 'Tente outro nome.' : 'Digite o nome e aperte Enter.'}
                />
            )}
            
            {modalAberto && (
                <ProdutoFormModal
                    produto={produtoEditando}
                    onClose={() => setModalAberto(false)}
                    onSalvar={salvarProduto}
                />
            )}
        </div>
    )
}

export default CadastroProdutosPage
