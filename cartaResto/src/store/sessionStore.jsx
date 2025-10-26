import {create} from 'zustand';

const userStorage =
(set) => (
    { 
        user: null,
        setUser: (newUser) => set({ user: newUser }),
        clearUser: (user) => set({ user: null })
    }
);


const useSessionStore = create(userStorage);

export default useSessionStore;
