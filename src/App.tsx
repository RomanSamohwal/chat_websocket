import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './store';
import {createConnection, destroyConnection, sendMessage, setClientName, typingMessage} from './chat-reducer';


function App() {

    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const typingUsers = useSelector((state: AppStateType) => state.chat.typingUsers)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createConnection())
        return () => {
            dispatch(destroyConnection())
        }
    }, []);


   // const [messages, setMessages] = useState<Array<any>>([]);
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
                    let element = e.currentTarget;
                    let maxScrollPosition = element.scrollHeight - element.clientHeight;
                    let module = Math.abs(maxScrollPosition - element.scrollTop) < 10

                    if (e.currentTarget.scrollTop > lastScrollTop && module ) {
                        setIsAutoScrollActive(true);
                    } else {
                        setIsAutoScrollActive(false)
                    }
                    setLastScrollTop(e.currentTarget.scrollTop)
                }}>
                    {messages.map((m:any) => {
                        return <div key={m.id}>
                            <b>{m.user.name}</b> : {m.message}
                            <hr/>
                        </div>
                    })}
                    {typingUsers.map((m: any) => {
                        return <div key={m.id}>
                            <b>{m.name} : </b> ...typing message
                        </div>
                    })}
                    <div ref = {messagesAnchorRef}> </div>
                </div>
                <input value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                <button onClick={() => {
                   dispatch(setClientName(name))
                }}
                >send name
                </button>
                <div>
                        <textarea value={message}
                                  onChange={(e) => setMessage(e.currentTarget.value)}
                                  onKeyPress={()=>{
                                      dispatch(typingMessage())
                                  }} >

                        </textarea>
                    <button onClick={() => {
                        // канал по которому придет сообщение на бэк , событие 'client-message-sent'
                        dispatch(sendMessage(message))
                        setMessage('');
                    }}>Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
