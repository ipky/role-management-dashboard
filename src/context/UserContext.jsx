import { createContext, useContext, useReducer, useEffect } from 'react';
import { fakeApi } from '../data/fakeApi'

const UserContext = createContext(null);

const initialState = {
    users: [],
    loading: false,
    error: null,
};

function userReducer(state, action) {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: true, error: null };
        case "SET_ERROR":
            return { ...state, loading: false, error: action.payload };
        case "SET_USERS":
            return { ...state, loading: false, users: action.payload };
        default:
            return state;
    }
}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        loadUsers() ;
    }, []);

    const loadUsers = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const users = await fakeApi.getUsers();
            dispatch({ type: "SET_USERS", payload: users });
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: "Kullanıcılar yüklenemedi."});
        }
    };

    const addUser = async (user) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const users = await fakeApi.addUser(user);
            dispatch({ type: "SET_USERS", payload: users });
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: "Kullanıcı eklenemedi."});
        }
    };

    const deleteUser = async (id) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const users = await fakeApi.deleteUser(id);
            dispatch({ type: "SET_USERS", payload: users  });
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: "Kullanıcı silinemedi." });
        }
    };

    const updateUser = async (updatedUser) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const users = await fakeApi.updateUser(updatedUser);
            dispatch({ type: "SET_USERS", payload: users });
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: "Kullanıcı güncellenemedi." });
        }
    };

    return (
        <UserContext.Provider value={{ ...state, addUser, deleteUser, updateUser }}>{children}</UserContext.Provider>
    );
}

export function useUsers() {
    return useContext(UserContext);
}