import { ApolloClient, InMemoryCache } from "@apollo/client";


export const cliente = new ApolloClient({
  uri: import.meta.env.VITE_URL_API,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
  },
  cache: new InMemoryCache()
})