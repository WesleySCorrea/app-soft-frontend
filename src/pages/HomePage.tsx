import keycloak from '../auth/keycloak.ts'

function HomePage() {
  const nome = keycloak.tokenParsed?.name ?? keycloak.tokenParsed?.preferred_username

  return <h1>{nome}</h1>
}

export default HomePage
