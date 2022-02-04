// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        exerciseCount: Int
        savedExercises: [Exercise]
    }

    type Exercise {
        exerciseId: String
        equipment: String
        bodyPart: String
        gifUrl: String
        name: String
        target: String
    }

    type Auth {
        token: ID
        user: User
    }

    input exerciseInput {
        exerciseId: String
        equipment: String
        bodyPart: String
        gifUrl: String
        name: String
        target: String

    }

    type Query {
        me: User
        
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth  
        saveExercise(input: exerciseInput!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;