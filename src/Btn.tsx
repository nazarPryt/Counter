import React from 'react';
import s from './App.module.css'


type btnType = {
    name: string
    onClickFunction: () => void
}

function Btn (props: btnType) {

    const btnClickHandler = () => {
        props.onClickFunction()
    }

    return <button className={s.btn} onClick={btnClickHandler}>{props.name}</button>

};

export default Btn;