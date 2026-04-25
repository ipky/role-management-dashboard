import { initialUsers } from "./initialUsers";

let users = [... initialUsers];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fakeApi = {
    getUsers: async () => {
        await delay(500);
        return [...users];
    },
    
    addUser: async (user) => {
        await delay(500);
        users = [...users, user];
        return [...users];
    },

    deleteUser: async (id) => {
        await delay(500);
        users = users.filter((user) => user.id !== id);
        return [...users];
    },

    updateUser: async(updateUser) => {
        await delay(500);
        users = users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
        return [...users];
    },
}
