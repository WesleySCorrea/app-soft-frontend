
import { Eye } from 'lucide-react'
import type { Pedido } from '../../types/Pedido'
import { formatarData } from '../../utils/formatarData'
import { formatarMoeda } from '../../utils/formatarMoeda'
import './PedidoTabela.css'

type PedidoTabelaProps = {
    pedidos: Pedido[]
}

const statusTexto = {
    PENDENTE: 'Pendente',
    CONFIRMADO: 'Confirmado',
    CANCELADO: 'Cancelado',
}

function PedidoTabela({ pedidos }: PedidoTabelaProps) {

    function onVisualizar(id: number): void {
        console.log('Chamar info de pedido de id ', id)
    }

    return (
        <div className="pedido-lista">
            <table>
                <thead>
                    <tr>
                        <th>Nº</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => (
                        <tr key={pedido.id}>
                            <td className="pedido-lista-numero">{pedido.id}</td>

                            <td>{formatarData(pedido.criadoEm)}</td>

                            <td>
                                <span className={`pedido-status ${pedido.status.toLowerCase()}`}>
                                    {statusTexto[pedido.status]}
                                </span>
                            </td>

                            <td className="pedido-lista-total">
                                {pedido.total !== null ? formatarMoeda(pedido.total) : '—'}
                            </td>

                            <td>
                                <button className="pedido-lista-visualizar" onClick={() => onVisualizar(pedido.id)}>
                                    <Eye size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PedidoTabela
