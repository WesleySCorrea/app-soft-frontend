import { NavLink } from 'react-router'
import { ShoppingCart, ClipboardList, Package, Settings, LogOut, Home } from 'lucide-react'
import keycloak from '../../auth/keycloak'
import './Sidebar.css'

function iniciais(nome: string) {
  const partes = nome.trim().split(' ')
  const primeira = partes[0][0]
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : ''
  return (primeira + ultima).toUpperCase()
}

function Sidebar() {
  const nome = keycloak.tokenParsed?.name ?? keycloak.tokenParsed?.preferred_username ?? ''
  const isAdmin = keycloak.hasRealmRole('ADMIN')

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <ShoppingCart size={24} />
        <span>AppSoft</span>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/"><Home size={18} /> Início</NavLink>
        <NavLink to="/novo-pedido"><ShoppingCart size={18} /> Novo Pedido</NavLink>
        <NavLink to="/meus-pedidos"><ClipboardList size={18} /> Meus Pedidos</NavLink>
        {isAdmin && (
          <>
            <NavLink to="/produtos"><Package size={18} /> Produtos</NavLink>
            <NavLink to="/configuracoes"><Settings size={18} /> Configurações</NavLink>
          </>
        )}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <span className="avatar">{iniciais(nome)}</span>
          <span>{nome}</span>
        </div>
        <button onClick={() => keycloak.logout({ redirectUri: window.location.origin })}>
          <LogOut size={18} /> Sair
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
