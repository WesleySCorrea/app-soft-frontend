import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Layout from './components/Layout/Layout'
import HomePage from './pages/home/HomePage'
import NovoPedidoPage from './pages/novoPedido/NovoPedidoPage'
import MeusPedidosPage from './pages/meuPedidos/MeusPedidosPage'
import CadastroProdutosPage from './pages/cadastroProdutos/CadastroProdutosPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/novo-pedido" element={<NovoPedidoPage />} />
          <Route path="/meus-pedidos" element={<MeusPedidosPage />} />
          <Route path="/cadastro-produtos" element={<CadastroProdutosPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
