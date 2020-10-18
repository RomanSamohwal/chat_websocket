import io from "socket.io-client";

let my = 'https://chat-websocket-backend.herokuapp.com';
let dimon = 'https://samurai-chat-back.herokuapp.com'
let localhost = 'http://localhost:3009'

export const api = {
    socket: null as null | SocketIOClient.Socket,
    createConnection() {
        this.socket = io(my);
    },
    subscribe(initMessagesHandler: (messages: any) => void,
              newMessageHandler: (message: any) => void,
              userTypingHandler: (user: any) => void) {
        this.socket?.on('init-messages-published', initMessagesHandler);
        this.socket?.on('new-message-sent', newMessageHandler)
        this.socket?.on('user-typing', userTypingHandler)
    },
    destroyConnection() {
        this.socket?.disconnect()
        this.socket = null;
    },
    sendName(name: string) {
        // канал по которому придет сообщение на бэк , событие 'client-message-sent'
        this.socket?.emit('client-name-sent', name)
    },
    sendMessage(message: string) {
        // канал по которому придет сообщение на бэк , событие 'client-message-sent'
        this.socket?.emit('client-message-sent', message, (error: string | null) => {
            if(error) alert(error)
        });
    },
    typingMessage() {
        this.socket?.emit('client-typing');
    }
}