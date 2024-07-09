// Dispatch
import { createSlice } from '@reduxjs/toolkit';
// @types
import { IUserState } from 'types/user';

// ----------------------------------------------------------------------

const initialState: IUserState = {
    authLoading: true,
    isLogined: false,
    user: null,
    balance: {
        main: 0,
        available: 0,
        reference: 0,
        profit: 0,
        bonus: 0,
        withdrawableBonus: 0,
        withdrawable: 0,
        exposure: 0,
        pending: 0
    },
    accessToken: '',
    blockList: [],
    stakes: [],
    disabledMatch: []
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginAction(state, action) {
            state.isLogined = true;
            state.authLoading = false;
            state.user = action.payload.user;
            state.stakes = action.payload.user.stake;
            state.blockList = action.payload.user.sportsBlock.blockList;
            state.disabledMatch = action.payload.disabledMatch;
            state.balance = action.payload.user.balance;
            state.accessToken = action.payload.accessToken;
        },
        logoutAction(state) {
            state.isLogined = false;
            state.authLoading = false;
            state.user = null;
            state.stakes = [];
            state.accessToken = '';
            state.balance = {
                main: 0,
                available: 0,
                reference: 0,
                profit: 0,
                bonus: 0,
                withdrawableBonus: 0,
                withdrawable: 0,
                exposure: 0,
                pending: 0
            };
        },
        updateBalance(state, action) {
            state.balance = action.payload;
        },
        updateUserAction(state, action) {
            state.user = { ...state.user, ...action.payload };
        },
        updateStakesAction(state, action) {
            state.stakes = action.payload;
        },
        updateSportsBlock(state, action) {
            state.blockList = action.payload;
        }
    }
});

export const { loginAction, logoutAction, updateBalance, updateSportsBlock, updateStakesAction, updateUserAction } =
    authSlice.actions;
// Reducer
export default authSlice.reducer;
