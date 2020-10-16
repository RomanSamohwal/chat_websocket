import React, {useEffect, useRef, useState} from 'react';
import io from 'socket.io-client'

let my = 'https://chat-websocket-backend.herokuapp.com';
let dimon = 'https://samurai-chat-back.herokuapp.com'
let localhost = 'http://localhost:3009'
const socket = io(localhost);

function App() {


    useEffect(() => {
        //мы подписывемся на события 'client-message-sent' с бэка
        socket.on('init-messages-published', (messages: any) => {
            setMessages(messages)
        });
        socket.on('new-message-sent', (message: any) => {
            setMessages((messages) => [...messages, message])
        })
    }, []);


    const [messages, setMessages] = useState<Array<any>>([]);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('Roman');
    const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0)

    const messagesAnchorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if(isAutoScrollActive){
          messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
      }
    }, [messages])

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <div>
                <div style={{
                    border: '1px solid black',
                    padding: '10px',
                    height: '300px',
                    width: '300px',
                    overflowY: 'scroll'
                }} onScroll={(e) => {
                    if (e.currentTarget.scrollTop > lastScrollTop) {
                        setIsAutoScrollActive(true);
                    } else {
                        setIsAutoScrollActive(false)
                    }
                    setLastScrollTop(e.currentTarget.scrollTop)
                }}>
                    {messages.map(m => {
                        return <div key={m.id}>
                            <b>{m.user.name}</b> : {m.message}
                            <hr/>
                        </div>
                    })}
                    <div ref = {messagesAnchorRef}> </div>
                </div>
                <input value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                <button onClick={() => {
                    // канал по которому придет сообщение на бэк , событие 'client-message-sent'
                    socket.emit('client-name-sent', name);
                }}
                >send name
                </button>
                <div>
                        <textarea value={message}
                                  onChange={(e) => setMessage(e.currentTarget.value)}>
                </textarea>
                    <button onClick={() => {
                        // канал по которому придет сообщение на бэк , событие 'client-message-sent'
                        socket.emit('client-message-sent', message);
                        setMessage('');
                    }}>Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
