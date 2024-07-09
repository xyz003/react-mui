import React, { useState } from 'react';

import { Socket } from 'socket.io-client';
import { SocketContext } from './socket-context';

// import { logoutAction, updateBalance, updateSportsBlock } from 'redux/slices/auth';

// import config, { HOST_API_KEY } from 'config';
// import { setEventSettings } from 'redux/slices/exchange';
// import { ISettings } from 'types/bet';
// import { checkPageStatus } from 'utils/utils';
// import useSettings from 'hooks/useSettings';
// import useAuth from 'hooks/useAuth';

type SocketProviderProps = {
    children: React.ReactNode;
};

const SocketProvider = ({ children }: SocketProviderProps) => {
    // const siteSetting = useSettings();
    // const { isLogined, user, accessToken, logout } = useAuth();
    const [socket] = useState<Socket | null>(null);

    // const registerCallbacks = useCallback(() => {
    //     if (socket && user) {
    //         socket.on('destory', (dd) => {
    //             if (user && user._id && dd.data[user._id]) {
    //                 dispatch(logoutAction());
    //                 localStorage.removeItem('accessToken');
    //             }
    //         });
    //         socket.on('logout', (data) => {
    //             if (data[user._id]) {
    //                 logout();
    //             }
    //         });
    //         socket.on('multi-login', (data) => {
    //             if (data.token === accessToken) {
    //                 dispatch(logoutAction());
    //                 localStorage.removeItem('accessToken');
    //             }
    //         });
    //         socket.on('balance', (data) => {
    //             if (data[user._id]) {
    //                 dispatch(updateBalance(data[user._id]));
    //             }
    //         });
    //         socket.on('notification', (data) => {
    //             if (data[user._id]) {
    //                 const message = data[user._id];
    //                 const logo = siteSetting.config?.domain.logo;
    //                 checkPageStatus(message, logo);
    //             }
    //         });
    //         socket.on('sportsBlock', (data) => {
    //             if (data[user._id]) {
    //                 dispatch(updateSportsBlock(data[user._id]));
    //             }
    //         });
    //         socket.on('eventSetting', (data) => {
    //             eventSetting(data);
    //         });
    //     }
    // }, [user]);

    // const cleanUp = () => {
    //     setSocket(null);
    //     config.socket = null;
    // };

    // const connect = (token: string) => {
    //     const socketInit: Socket = io(String(HOST_API_KEY), {
    //         transports: ['websocket'],
    //         upgrade: false,
    //         query: { auth: token }
    //     });
    //     registerCallbacks();
    //     setSocket(socketInit);
    //     config.socket = socketInit;
    //     return socketInit;
    // };

    // useEffect(() => {
    //     const token = localStorage.getItem('accessToken');
    //     connect(token ?? '');
    //     return () => cleanUp();
    //     // eslint-disable-next-line
    // }, [isLogined]);

    return <SocketContext.Provider value={{ socket }}> {children}</SocketContext.Provider>;
};

export default SocketProvider;
