import { useState } from 'react'
import type { Produto } from '../types/Produto'
import type { ItemPedido } from '../types/ItemPedido'

export function usePedido() {
  const [itens, setItens] = useState<ItemPedido[]>([])

  const total = itens.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0)

  function adicionar(produto: Produto, quantidade: number) {
    setItens((atuais) => {
      const existente = atuais.find((item) => item.produto.produtoId === produto.produtoId)

      if (existente) {
        return atuais.map((item) =>
          item.produto.produtoId === produto.produtoId
            ? { ...item, quantidade: Math.min(item.quantidade + quantidade, produto.estoque) }
            : item,
        )
      }

      return [...atuais, { produto, quantidade }]
    })
  }

  function alterarQuantidade(produtoId: number, quantidade: number) {
    setItens((atuais) =>
      atuais.map((item) => (item.produto.produtoId === produtoId ? { ...item, quantidade } : item)),
    )
  }

  function remover(produtoId: number) {
    setItens((atuais) => atuais.filter((item) => item.produto.produtoId !== produtoId))
  }

  return { itens, total, adicionar, alterarQuantidade, remover }
}
