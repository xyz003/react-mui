const NODE_ENV = process.env.NODE_ENV;

export const HOST_API_KEY =
    NODE_ENV === 'production' ? process.env.REACT_APP_HOST_API : process.env.REACT_APP_LOCAL_HOST_API;

export const PATH_AFTER_LOGIN = '/auth/login';
