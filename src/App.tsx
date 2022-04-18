import React, {useEffect, useState} from 'react';
import Counter from "./Counter";
import s from './App.module.css'


function App() {

    let [value, setValue] = useState(0)

    useEffect( ()=> {
        let yo = localStorage.getItem('val')
        if (yo){
            setValue(JSON.parse(yo))
        }
    }, [value])

    let increaseCounter = () => {
            ++value
            setValue(value)
        localStorage.setItem('val', JSON.stringify(value))
    }

    const resetCounter = () => {
        setValue(0)
        localStorage.removeItem('val')
    }

    const changeDisplay = true


  return (
    <div className={s.app}>
      <Counter
          initialState={value}
          resetCounter={resetCounter}
          increaseCounter={increaseCounter}
          changeDisplay={changeDisplay}
      />
    </div>
  );
}

export default App;
