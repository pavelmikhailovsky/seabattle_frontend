import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {boardModel} from "entities/board";

const rootReducer = combineReducers({
    enemyBoard: boardModel.enemyBoardReducer
});

export const store = configureStore({reducer: rootReducer});