import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import produce from "immer";

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState: { repositories: [] },
    reducers: {
        updateRepositories: (state, action) => produce(state, stateDraft => {
            stateDraft.repositories = action.payload;
        })
    }

});

export const actions = repositoriesSlice.actions;

export const rootReducer = combineReducers({
    repositories: repositoriesSlice.reducer,
});

export const initialState = {
    repositories: {
        repositories: [],
    },
};