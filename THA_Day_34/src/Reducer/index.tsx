import {combineReducers} from 'redux'
import {changeReducer} from './main'
const rootReducer = combineReducers(
    {changeReducer}
)
export type rootReducerType = ReturnType<typeof rootReducer>;
export {rootReducer};