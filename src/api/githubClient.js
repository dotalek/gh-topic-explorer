import { ApolloClient, InMemoryCache } from "@apollo/client";

const ENDPOINT = import.meta.env.VITE_GITHUB_ENDPOINT;
const TOKEN = import.meta.env.VITE_GITHUB_PAT;

export default new ApolloClient({
  uri: ENDPOINT,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
  cache: new InMemoryCache(),
});
