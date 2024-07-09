import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthContext } from './auth-context';
import axios from 'utils/axios';
import { setSession } from 'utils/auth';
import localStorageAvailable from 'utils/localStorageAvailable';

import { loginAction, logoutAction, updateStakesAction, updateUserAction } from 'store/slices/auth';

type AuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    const dispatch = useDispatch();
    const store = useSelector((state: any) => state.auth);
    const storageAvailable = localStorageAvailable();

    const initialize = useCallback(async () => {
        try {
            const accessToken = storageAvailable ? localStorage.getItem('accessToken') : '';
            if (accessToken) {
                setSession(accessToken);
                const response = await axios.post('/api/auth/me');
                const { user } = response.data;
                dispatch(loginAction({ user, accessToken }));
            } else {
                dispatch(logoutAction());
            }
        } catch (error) {
            setSession(null);
            dispatch(logoutAction());
        }
    }, [storageAvailable, dispatch]);

    useEffect(() => {
        initialize();
    }, [initialize]);

    // LOGIN
    const login = useCallback(
        async (username: string, password: string, remember: boolean) => {
            const response = await axios.post('/api/auth/login', {
                username,
                password
            });
            const { accessToken, user } = response.data;
            if (remember) {
                localStorage.setItem('hattrick247', JSON.stringify({ username, password }));
            } else {
                localStorage.setItem('hattrick247', '');
            }
            setSession(accessToken);
            dispatch(loginAction({ user, accessToken }));
        },
        [dispatch]
    );

    // REGISTER
    const register = useCallback(async (registerValue: any) => {
        const response = await axios.post('/api/auth/register', registerValue);
        const { accessToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
    }, []);

    // UPDATE STAKES
    const updateStakes = useCallback(
        async (stakes: { name: string; value: number }[]) => {
            dispatch(updateStakesAction(stakes));
        },
        [dispatch]
    );

    // UPDATE USER
    const updateUser = useCallback(
        async (params: { kyc: boolean }) => {
            dispatch(updateUserAction(params));
        },
        [dispatch]
    );

    // LOGOUT
    const logout = useCallback(async () => {
        try {
            const response = await axios.post('api/auth/logout');
            if (response.data) {
                setSession(null);
                dispatch(logoutAction());
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error);
            setSession(null);
            dispatch(logoutAction());
            window.location.href = '/';
        }
    }, [dispatch]);

    const memoizedValue = useMemo(
        () => ({
            authLoading: store.authLoading,
            accessToken: store.accessToken,
            user: store.user,
            blockList: store.blockList,
            disabledMatch: store.disabledMatch,
            stakes: store.stakes,
            isLogined: store.isLogined,
            login,
            register,
            logout,
            updateUser,
            updateStakes
        }),
        [store, login, logout, register, updateUser, updateStakes]
    );

    return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
