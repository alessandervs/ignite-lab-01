import { ApolloProvider } from '@apollo/client'
import { cliente } from './lib/apolo'
import { Event } from './pages/Event'
import { Router } from './Router'


function App() {


  return (
    <div>
      <ApolloProvider client={cliente}>
        <Router />
      </ApolloProvider>
    </div>
  )
}

export default App
