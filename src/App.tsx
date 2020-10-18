import React from 'react';
import {SelectionName} from './SelectionName';
import {Message} from './Message';
import style from './App.module.css'

function App() {
    return (
        <div className={style.App}>
            <div>
                <SelectionName/>
                <Message/>
            </div>
        </div>
    );
}

export default App;
