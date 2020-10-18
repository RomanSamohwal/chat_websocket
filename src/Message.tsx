import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './store';
import {createConnection, destroyConnection, sendMessage, typingMessage} from './chat-reducer';
import Messages from './Messages';
import style from './Chat.module.css'
import IconLabelButtons from './ButtonSend';
import TextField from '@material-ui/core/TextField';
import BorderColorIcon from '@material-ui/icons/BorderColor';

export const Message = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const typingUsers = useSelector((state: AppStateType) => state.chat.typingUsers)
    const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createConnection())
        return () => {
            dispatch(destroyConnection())
        }
    }, []);

    useEffect(() => {
        if (isAutoScrollActive) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return <div>
        <div className={style.Chat} onScroll={(e) => {
            let element = e.currentTarget;
            let maxScrollPosition = element.scrollHeight - element.clientHeight;
            let module = Math.abs(maxScrollPosition - element.scrollTop) < 10

            if (e.currentTarget.scrollTop > lastScrollTop && module) {
                setIsAutoScrollActive(true);
            } else {
                setIsAutoScrollActive(false)
            }
            setLastScrollTop(e.currentTarget.scrollTop)
        }}>
            {messages.map((m: any) => {
                return <Messages key={m.id} text={m.message} name={m.user.name}/>
            })}
            {typingUsers.map((m: any) => {
                return <div key={m.id} className={style.Chat}>
                     <div>
                         <b>{m.name} : </b> .........<BorderColorIcon/>
                     </div>
                </div>
            })}
            <div ref={messagesAnchorRef}></div>
        </div>
        <div className={style.Message}>
            <div>
                <TextField value={message}
                           onChange={(e) => setMessage(e.currentTarget.value)}
                           onKeyPress={() => {
                               dispatch(typingMessage())
                           }}>
                </TextField>
                <IconLabelButtons sendMessage={() => {
                    // канал по которому придет сообщение на бэк , событие 'client-message-sent'
                    dispatch(sendMessage(message))
                    setMessage('');
                }}>Send Message
                </IconLabelButtons>
            </div>
        </div>
    </div>
}

/*<Messages key={m.id} text={'...typing message'} name={m.name}/>*/