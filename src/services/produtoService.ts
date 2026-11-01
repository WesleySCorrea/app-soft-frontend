import keycloak from "../auth/keycloak";
import type { Produto } from "../types/Produto";

const API_URL = 'http://localhost:9091';

export async function buscarProdutos(nome: string): Promise<Produto[]> {
  await keycloak.updateToken(30);

  const resposta = await fetch(`${API_URL}/produtos?nome=${encodeURIComponent(nome)}`, {
    headers: { Authorization: `Bearer ${keycloak.token}` },
  });

  if (!resposta.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  
  return resposta.json();
}