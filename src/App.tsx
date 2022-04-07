import React, {useState} from 'react';
import Counter from "./Counter";
import s from './App.module.css'


function App() {


    let [value, setValue] = useState(0)

    let increaseCounter = () => {
        ++value
        setValue(value)
    }

    const resetCounter = () => {
        setValue(0)
    }


  return (
    <div className={s.app}>
      <Counter
          initialState={value}
          resetCounter={resetCounter}
          increaseCounter={increaseCounter}
      />
    </div>
  );
}

export default App;
