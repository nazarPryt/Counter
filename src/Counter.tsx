import React from 'react';
import Btn from "./Btn";
import s from './App.module.css'
import Display from "./Display";


type CounterType = {
    increaseCounter: () => void
    resetCounter: () => void
    initialState: number
    changeDisplay: any
}

function Counter (props: CounterType) {

    const incBtnDisabler = props.initialState === 5;
    const resetBtnDisabler = props.initialState !== 5;
    const changeDisplayHandler = false

    return (
        <div className={s.counterWrapper}>
            <Display initialState={props.initialState}/>
            <div className={s.btnWrapper}>
                <Btn isBtnDisable={incBtnDisabler} onClickFunction={props.increaseCounter} name={'Inc'}/>
                <Btn isBtnDisable={resetBtnDisabler} onClickFunction={props.resetCounter} name={'Reset'}/>
                <Btn isBtnDisable={changeDisplayHandler} onClickFunction={props.changeDisplay} name={'Set'}/>
            </div>
        </div>
    );
};

export default Counter;