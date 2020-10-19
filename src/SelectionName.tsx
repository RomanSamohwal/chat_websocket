import React, {useState} from 'react';
import {setClientName, typingMessage} from './chat-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TextField} from '@material-ui/core';
import {AppStateType} from './store';

export const SelectionName = () => {

    const nameBack = useSelector((state: AppStateType) => state.chat.name)
    console.log('SelectionName' + nameBack)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [error, setError] = useState<string | null>(null)
    const [disable, setDisable] = useState(false)

    const addButtonHandler = () => {
        if (name.trim() !== '') {
            dispatch(setClientName(name))
            setName("");
        } else {
            setError('required to enter your name')
            setDisable(true)
        }
    }

    const onKeyPressHandler = (e: any) => {
        dispatch(typingMessage())
        if (error !== null) {
            setError(null);
            setDisable(false)
        }
        if (e.charCode === 13) {
            addButtonHandler();
        }
    }

    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        {!nameBack ?
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                paddingTop: '5px'
            }}>
                <div>
                    <TextField variant='outlined'
                               value={name} label='enter your name'
                               onChange={(e) => setName(e.currentTarget.value)}
                               color={'primary'}
                               inputMode={'text'} onKeyPress={onKeyPressHandler}
                               autoFocus
                               error={!!error}
                               helperText={error}
                    />
                </div>
                <div style={{margin: '5px'}}>
                    <Button disabled={disable} color={'primary'} variant="contained" onClick={addButtonHandler}
                    >send name
                    </Button>
                </div>
            </div> : <h1>{nameBack}</h1>}
    </div>
}