import { Package, Pencil } from 'lucide-react'
import type { Produto } from '../../types/Produto'
import { formatarMoeda } from '../../utils/formatarMoeda'
import './ProdutoTabela.css'

type ProdutoTabelaProps = {
    produtos: Produto[]
    onEditar: (produto: Produto) => void
}

function ProdutoTabela({ produtos, onEditar }: ProdutoTabelaProps) {
    return (
        <div className="produto-tabela">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.produtoId}>
                            <td className="produto-tabela-id">{produto.produtoId}</td>
                            <td>
                                <div className="produto-tabela-produto">
                                    <div className="produto-tabela-icone">
                                        <Package size={20} />
                                    </div>
                                    <div className="produto-tabela-info">
                                        <strong>{produto.nome}</strong>
                                        <span>{produto.descricao}</span>
                                    </div>
                                </div>
                            </td>
                            <td>{formatarMoeda(produto.preco)}</td>
                            <td>{produto.estoque}</td>
                            <td>
                                <span className={`produto-tabela-status ${produto.ativo ? 'ativo' : 'inativo'}`}>
                                    {produto.ativo ? 'Ativo' : 'Inativo'}
                                </span>
                            </td>
                            <td>
                                <button className="produto-tabela-editar" onClick={() => onEditar(produto)}>
                                    <Pencil size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProdutoTabela
