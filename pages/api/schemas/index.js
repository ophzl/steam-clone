import {gql} from "apollo-server-micro";

export const typeDefs = gql`
    type Game {
        id: ID
        name: String!
        note: Float
        editor: String
        release_date: String
        price: Float
        background_url: String
        logo_url: String
        category: Category
    }
    
    enum Category {
        Action
        Adventure
        SF
        Horror
    }

    type  Query {
        getGames: [Game]
        getGame(name: String!): Game!
    }`