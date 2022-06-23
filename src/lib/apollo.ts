import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nrcoje0o1601xo025x6kin/master',
    cache: new InMemoryCache()
});