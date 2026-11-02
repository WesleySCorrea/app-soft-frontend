import type { ItemPedido } from "./ItemPedido"
import type { PedidoStatus } from "./PedidoStatus"

export type Pedido = {
  id: number
  status: PedidoStatus
  total: number | null
  criadoEm: string
  itens: ItemPedido[]
}