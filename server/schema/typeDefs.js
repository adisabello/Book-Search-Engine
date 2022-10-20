const Book = require('../models/Book');
const User = require('../models/User');

const {gql} = require("apollo-server-express");

const typeDefs = gql`

    type BookType {
        authors: [String!]!
        description: String!
        id: String!
        image: String!
        link: String!
        title: String!
    }

    type UserType {
        username: String!
        email: String!
        password: String!
        savedBooks: [BookType!]!
        _id: String!
    }

    #Queries
    type Query{
        me(id: String!): UserType
        allUsers: [UserType]
    }

    #Mutations
    type Mutation{
        login( credential: String! password: String!): String!
        addUser( email: String! username:String! password: String!): UserType
        addBook(id: String! bookId: String!): UserType
        deleteBook(id: String! bookId: String!): UserType
    }
`

module.exports = {typeDefs};