import {createSlice} from "@reduxjs/toolkit";

export const enemyBoardSlice = createSlice({
    name: "enemyBoard",
    initialState: {},
    reducers: {
        hit: (state, action) => {}
    }
});

export const {
    hit
} = enemyBoardSlice.actions;

export const selectEnemyBoard = (state: unknown) => state;

export default enemyBoardSlice.reducer;