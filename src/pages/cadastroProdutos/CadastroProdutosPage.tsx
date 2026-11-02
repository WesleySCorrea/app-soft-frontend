import { Plus } from 'lucide-react'
import './CadastroProdutoPage.css'
import { useState } from 'react'
import ProdutoFormModal from '../../components/ProdutoEditModal/ProdutoEditModal'
import type { Produto } from '../../types/Produto'
import { atualizarProduto, criarProduto } from '../../services/produtoService'

function CadastroProdutosPage() {
    const [modalAberto, setModalAberto] = useState(false)
    const [produtoEditando, setProdutoEditando] = useState<Produto | null>(null)

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

    function abrirNovo() {
        setProdutoEditando(null)
        setModalAberto(true)
    }

    // function abrirEdicao(produto: Produto) {
    //     setProdutoEditando(produto)
    //     setModalAberto(true)
    // }

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
