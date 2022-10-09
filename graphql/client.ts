import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://dev.boisvertdupras.com/graphql/",
    cache: new InMemoryCache()
  });