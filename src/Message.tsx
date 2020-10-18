import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './store';
import {createConnection, destroyConnection, sendMessage, typingMessage} from './chat-reducer';
import Messages from './Messages';
import style from './Chat.module.css'
import IconLabelButtons from './ButtonSend';
import TextField from '@material-ui/core/TextField';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import imageBack from './assests/chat.jpg'

export const Message = () => {
    const chatBackground = {
        backgroundImage: `url(${imageBack})`,
    }

    const [error, setError] = useState<string | null>(null)
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

    const addItemHandler = () => {
        if (message.trim() !== '') {
            dispatch(sendMessage(message))
            setMessage("");
        } else {
            setError('required to enter a message')
        }
    }

    const onKeyPressHandler = (e: any) => {
        dispatch(typingMessage())
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return <div>
        <div style={chatBackground} className={style.Chat} onScroll={(e) => {
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
                return <div key={m.id}>
                     <div>
                         <Messages key={m.id} text={'......'} name={m.name}><BorderColorIcon/></Messages>
                         {/*<b>{m.name} : </b> .........<BorderColorIcon/>*/}
                     </div>
                </div>
            })}
            <div ref={messagesAnchorRef}></div>
        </div>
        <div className={style.Message}>
            <div>
                <TextField style={{borderColor: 'white'}}
                           value={message}
                           variant='outlined'
                           error={!!error}
                           inputMode={'text'}
                           label='enter your message'
                           onChange={(e) => setMessage(e.currentTarget.value)}
                           helperText={error}
                           onKeyPress={onKeyPressHandler}>
                </TextField>
                <IconLabelButtons sendMessage={addItemHandler}>Send Message</IconLabelButtons>
            </div>
        </div>
    </div>
}

/*<Messages key={m.id} text={'...typing message'} name={m.name}/>*/