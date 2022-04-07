import React from 'react';
import s from './App.module.css'


type btnType = {
    name: string
    onClickFunction: () => void
    isBtnDisable: boolean
}

function Btn (props: btnType) {

    const btnClickHandler = () => {
        props.onClickFunction()
    }

    return <button disabled={props.isBtnDisable} className={s.btn} onClick={btnClickHandler}>{props.name}</button>

};

export default Btn;