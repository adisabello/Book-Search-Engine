import {gql} from 'apollo-boost';

const meQuery = gql`
    ($id: String!){
        me($id){
            _id
            name
            email
        }
    }
`;

const loginMutation = gql`
    mutation($user: String! $password: String!){
        login(user: $user password: $password)
    }
`;

const addBookMutation = gql`

    mutation($token: String! $bookId: String!){
        addBook(user: $token bookId: $bookId){
            username
            email
            saveBooks
            _id
        }
    }
`;

const deleteBookMutation = gql`

    mutation($token: String! $bookId: String!){
        deleteBook(user: $token bookId: $bookId){
            username
            email
            saveBooks
            _id
        }
    }
`;

const createUser = gql`

    mutation($username: String! $email: String! $password: String!){
        createUser(username: $username email: $email password: $password){
            username
            email
            saveBooks
            _id
        }
    }
`;

export{createUser, addBookMutation, deleteBookMutation, loginMutation, meQuery};