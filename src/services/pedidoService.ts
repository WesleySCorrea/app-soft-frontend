import keycloak from '../auth/keycloak';
import type { Pedido } from '../types/Pedido';

const API_URL = 'http://localhost:9090';

export async function criarPedido(pedido: Pedido): Promise<void> {
  await keycloak.updateToken(30);

  const resposta = await fetch(`${API_URL}/pedidos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${keycloak.token}`,
    },
    body: JSON.stringify(pedido),
  });

  if (!resposta.ok) {
    throw new Error('Erro ao criar pedido');
  }
}

export async function listarPedidos(): Promise<Pedido[]> {
  await keycloak.updateToken(30);

  const resposta = await fetch(`${API_URL}/pedidos`, {
    headers: { Authorization: `Bearer ${keycloak.token}` },
  });

  if (!resposta.ok) {
    throw new Error('Erro ao listar pedidos');
  }

  return resposta.json();
}