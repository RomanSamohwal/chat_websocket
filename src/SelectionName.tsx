import React, {useState} from 'react';
import {setClientName} from './chat-reducer';
import {useDispatch} from 'react-redux';
import {Button, Input, TextField} from '@material-ui/core';

export const SelectionName = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    return <div>
        <TextField variant='outlined' value={name} label='enter your name' onChange={(e) =>
            setName(e.currentTarget.value)} color={'primary'} inputMode={'text'} autoFocus/>
        <Button color={'primary'} variant="contained" onClick={() => {
            dispatch(setClientName(name))
        }}
        >send name
        </Button>
    </div>
}