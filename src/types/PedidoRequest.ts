export type PedidoRequest = {
  itens: {
    produtoId: number
    quantidade: number
  }[]
}