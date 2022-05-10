import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});







// import {GraphQLClient} from "graphql-request";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";

// const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

// const client = new ApolloClient({
//   uri: 'https://api.github.com/graphql',
//   cache: new InMemoryCache()
// });

// // const client = new GraphQLClient('https://api.github.com/graphql', { headers: {
// // authorization: token ? `Bearer ${token}` : ""
// // } });

// export default client;