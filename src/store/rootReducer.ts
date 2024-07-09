import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import authReducer from './slices/auth';
import casinoReducer from './slices/casino';
// ----------------------------------------------------------------------

export const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: []
};

const rootReducer = combineReducers({
    auth: authReducer,
    casino: casinoReducer
});

export default rootReducer;
