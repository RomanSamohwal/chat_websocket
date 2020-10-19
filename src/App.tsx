import React from 'react';
import {SelectionName} from './SelectionName';
import {Message} from './Message';
import style from './App.module.css'
import imageBack from './assests/wall.jpg'

function App() {

    const background = {
        backgroundImage: `url(${imageBack})`,
    }
    return (
        <div style={background} className={style.App}>
            <div className={style.Message}>
               <div><SelectionName/></div>
               <div><Message/></div>
            </div>
        </div>
    );
}

export default App;
