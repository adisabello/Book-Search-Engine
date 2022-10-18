# Book Search Engine Starter Code
# Server Side
I added Apollo server to the server packages and used it as a middle ware for express

I added the typeDefs and resolvers for the 1 query and 4 mutations in the Schema folder
amd linked them to the apollo server

The server now used apollo server with the 'graphql' endpoint to access the necessary queries
and mutations that fetched data from the db and could also make changes to teh datbase

# frontend
I wrapped the react app in an Apollo provider after installing the necessary packages

I created the queries and mutations in the queries folder. This was used whenever a query or 
mutation needed to be made to access the server

All the necessary requests for data were made using the queries and mutations provided