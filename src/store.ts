import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import {chatReducer} from './chat-reducer';

let rootReducer = combineReducers({chat: chatReducer})
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))