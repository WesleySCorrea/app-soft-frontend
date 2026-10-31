import keycloak from '../../auth/keycloak.ts'
import './HomePage.css'

function HomePage() {
    const nome = keycloak.tokenParsed?.name ?? keycloak.tokenParsed?.preferred_username

    return (
        <div className="home">
            <div className="home-card">
                <h1>Olá, {nome}!</h1>
                <p>Bem-vindo de volta!</p>
            </div>
        </div>
    )
}

export default HomePage
