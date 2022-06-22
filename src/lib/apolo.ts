import { ApolloClient, InMemoryCache } from "@apollo/client";


export const cliente = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oti5eh16ty01xl74qc8h1z/master',
  cache: new InMemoryCache()
})