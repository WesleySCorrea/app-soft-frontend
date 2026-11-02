import { useState } from 'react'
import type { Produto } from '../../types/Produto'
import Modal from '../Modal/Modal'
import './ProdutoEditModal.css'

type Props = {
    produto: Produto | null
    onClose: () => void
    onSalvar: (produto: Omit<Produto, 'produtoId'>) => void
}

function ProdutoEditModal({ produto, onClose, onSalvar }: Props) {
    const [nome, setNome] = useState(produto?.nome ?? '')
    const [descricao, setDescricao] = useState(produto?.descricao ?? '')
    const [preco, setPreco] = useState(produto?.preco ?? 0)
    const [estoque, setEstoque] = useState(produto?.estoque ?? 0)
    const [ativo, setAtivo] = useState(produto?.ativo ?? true)

    function salvar(e: React.FormEvent) {
        e.preventDefault()
        onSalvar({ nome, descricao, preco, estoque, ativo })
    }

    return (
        <Modal
            titulo={produto ? 'Editar produto' : 'Novo produto'}
            onClose={onClose}
            footer={
                <div className="produto-form-acoes">
                    <button type="button" className="btn-secundario" onClick={onClose}>Cancelar</button>
                    <button type="submit" form="produto-form" className="btn-primary">Salvar</button>
                </div>
            }
        >
            <form id="produto-form" className="produto-form" onSubmit={salvar}>
                <div className="produto-form-linha">
                    <label className="produto-form-id">
                        ID
                        <input value={produto?.produtoId ?? ''} placeholder="Automático" readOnly />
                    </label>

                    <label>
                        Nome
                        <input value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </label>
                </div>

                <label>
                    Descrição
                    <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                </label>

                <div className="produto-form-linha">
                    <label>
                        Preço
                        <input type="number" step="0.01" min="0.01" value={preco}
                            onChange={(e) => setPreco(Number(e.target.value))}
                            onBlur={(e) => (e.target.value = String(preco))}
                            required />
                    </label>

                    <label>
                        Estoque
                        <input type="number" min="0" value={estoque}
                            onChange={(e) => setEstoque(Number(e.target.value))} required />
                    </label>
                </div>

                <label className="produto-form-switch">
                    <input type="checkbox" checked={ativo} onChange={(e) => setAtivo(e.target.checked)} />
                    {ativo ? 'Ativo' : 'Inativo'}
                </label>
            </form>
        </Modal>
    )
}

export default ProdutoEditModal
