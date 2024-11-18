import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store";
import { en } from "../assets/lang/en";
const initialState: IState = {
    loader: false,
    leftMenu: true,
    languages: [
        {
            id: 1,
            key: 'az',
            value: 'Az'
        }, {
            id: 2,
            key: 'en',
            value: 'En'
        },
        {
            id: 3,
            key: 'ru',
            value: 'Ru'
        }
    ],
    locale: en,
    user: null
};
export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setUser: (state: IState, action: PayloadAction<any>) => {
            state.user = 'user';
        }
    }
})

export const {setUser} = rootSlice.actions;

export default rootSlice.reducer;