import React, {useEffect, useState} from 'react';
import Btn from "./Btn";
import s from './App.module.css'
import Display from "./Display";


/*???????????????????????????????????????????*/
// type yo = {
//     value: number > 0
// }
function Counter () {
    let [displayStatus, setDisplayStatus] = useState<boolean>(true)
    let [currentValue, setCurrentValue] = useState(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(1)



    useEffect( ()=> {
        let yo = localStorage.getItem('val')
        if (yo){
            setCurrentValue(JSON.parse(yo))
        }
    }, [currentValue])

    const changeDisplayHandler = () => {
        setDisplayStatus(!displayStatus)
        localStorage.setItem('display', JSON.stringify(displayStatus))
    }

    const increaseCounter = () => {
        if (currentValue >= 0) {
            ++currentValue
            setCurrentValue(currentValue)
            localStorage.setItem('val', JSON.stringify(currentValue))
        }
    }

    const resetCounter = () => {
        setCurrentValue(0)
        localStorage.removeItem('val')
    }
    const setMaxValueHandler = (value: number) => {
        if (value >= 1){
            setMaxValue(value)
        }
    }
    const setCurrentValueHandler = (value: number) => {
        setCurrentValue(value)
    }
    const setStartValueHandler = (value: number) => {
        if (value < maxValue && value >= 0){
            setStartValue(value)
            setCurrentValue(value)
        }
    }


/****************************************************************************************************************************/
/****************************************************************************************************************************/

    return (
        <div className={s.counterWrapper}>
            <Display
                currentValue={currentValue}
                maxValue={maxValue}
                startValue={startValue}
                setDisplayStatus={setDisplayStatus}
                setCurrentValue={setCurrentValueHandler}
                setMaxValue={setMaxValueHandler}
                setStartValue={setStartValueHandler}
                displayStatus={displayStatus}/>
            <div className={s.btnWrapper}>
                <Btn isBtnDisable={currentValue >= maxValue || !displayStatus} onClickFunction={increaseCounter} name={'Inc'}/>
                <Btn isBtnDisable={currentValue < maxValue || !displayStatus} onClickFunction={resetCounter} name={'Reset'}/>
                <Btn onClickFunction={changeDisplayHandler} name={'Set'}/>
            </div>
        </div>
    );
};

export default Counter;