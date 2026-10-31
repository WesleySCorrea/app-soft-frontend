import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'app-soft',
  clientId: 'app-soft-frontend',
})

export default keycloak
