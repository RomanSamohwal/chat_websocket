import {api} from './api';

const initialState = {
    messages: [] as any,
    typingUsers:  [] as any
}

export const chatReducer = (state: initialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'messages-received': {
            return {...state, messages: action.messages}
        }
        case 'new-messages-received': {
            return {
                ...state, messages: [...state.messages, action.message],
                typingUsers: state.typingUsers.filter((u: any) => u.id !== action.message.user.id)
            }
        }
        case 'typingUserAdded': {
            return {...state, typingUsers: [...state.typingUsers.filter((u: any) => u.id !== action.user.id), action.user]}
        }
        default: {
            return state
        }
    }
}

const messageReceived = (messages: any) => ({type: 'messages-received', messages} )
const newMessageReceived = (message: any) => ({type: 'new-messages-received', message} )
const typingUserAdded = (user: any) => ({type: 'typingUserAdded', user} )


export const createConnection = () => (dispatch: any) => {
    api.createConnection()
    api.subscribe((messages: any) => {
            dispatch(messageReceived(messages))
        }, (message: any) => {
            dispatch(newMessageReceived(message))
        },
        (user: any) => {
            dispatch(typingUserAdded(user))
        })
}

export const setClientName = (name: string) => (dispatch: any) => {
    api.sendName(name)
}

export const sendMessage = (message: string) => (dispatch: any) => {
    api.sendMessage(message)
}

export const typingMessage = () => (dispatch: any) => {
    api.typingMessage()
}

export const destroyConnection = () => (dispatch: any) => {
    api.destroyConnection()

}

type initialStateType = typeof initialState