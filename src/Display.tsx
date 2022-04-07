import React from 'react';
import s from './App.module.css'

type DisplayType = {
    initialState: number
}

function Display (props: DisplayType) {
    return <div className={props.initialState < 5 ?  s.display : s.displayRed}>{props.initialState}</div>

};

export default Display;