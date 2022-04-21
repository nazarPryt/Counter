import React, {useEffect, useState} from 'react';
import Counter from "./Counter";
import s from './App.module.css'


function App() {

  return (
    <div className={s.app}>
      <Counter/>
    </div>
  );
}

export default App;
