import axios from "axios";

// TODO: configure correct urls
export const resolvers = {
    Query: {
        getGames: async () => {
            try {
                const games = await axios.get("http://localhost:3000/games");
                return games.data.map(({ id, name, price }) => ({
                    id,
                    name,
                    price
                }));
            } catch (error) {
                throw error;
            }
        },
        getGame: async (_, args) => {
            try {
                const game = await axios.get(
                    `http://localhost:3000/games/${args.name}`
                );
                return {
                    id: game.data.id,
                    name: game.data.name,
                    price: game.data.price
                };
            } catch (error) {
                throw error;
            }
        }
    }
};