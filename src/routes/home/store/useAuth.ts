import { create } from 'zustand';

import { createJSONStorage, persist } from 'zustand/middleware';
import { IUser } from '../../../core';
import AuthApi from '../../../core/api/AuthApi';

interface State {
    //States
    user: IUser | undefined;
}

interface Actions {
    //Methods
    setUser: (token: string) => Promise<void>;
    login: (access: { email:string, password:string }) => Promise<boolean>;
    logout: (token: string) => Promise<void>;
}

const initialState: State = {
    user: undefined,
}

export const useAuth= create<State & Actions>()(
    persist(
        (set, get) => ({
            //States
            ...initialState,
            //Methods
            setUser: async() => {
                let user:IUser | undefined = undefined;

                try {
                    const { data } = await AuthApi.get('/users');

                    user = data;
                } catch (error) {
                    user = undefined;
                }

                set(() => ({ user }));
            }, 

            login: async(access: { email:string, password:string }) => {
                const { email, password } = access;
                let result = true;

                return result;
            },

            logout: async() => {                

            },
        }),
        {
            name: 'USER-QUICK',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)