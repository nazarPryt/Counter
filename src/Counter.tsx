import React from 'react';
import Btn from "./Btn";
import s from './App.module.css'


type CounterType = {
    increaseCounter: () => void
    resetCounter: () => void
    initialState: number
}

function Counter (props: CounterType) {
    return (
        <div className={s.counterWrapper}>
            <div className={s.display}>{props.initialState}</div>
            <div className={s.btnWrapper}>
                <Btn onClickFunction={props.increaseCounter} name={'inc'}/>
                <Btn onClickFunction={props.resetCounter} name={'reset'}/>
            </div>
        </div>
    );
};

export default Counter;