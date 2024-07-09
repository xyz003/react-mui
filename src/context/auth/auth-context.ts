import { createContext } from 'react';

export type RegisterValue = {
    username: string;
    name: string;
    phone: string;
    password: string;
};

export type AuthContextValue = {
    authLoading: boolean;
    isLogined: boolean;
    accessToken: string;
    user: any;
    login: (username: string, password: string, remember: boolean) => Promise<void>;
    updateUser: (params: { kyc: boolean }) => Promise<void>;
    register: (registerValue: RegisterValue) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export { AuthContext };
