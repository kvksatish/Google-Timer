import React from 'react'

import { useState } from 'react'
import Stopwatch from './Stopwatch'
import styles from './sty.module.css'
import Time from './Time'



const Todo = () => {

  const [changer, setChanger] = useState(true)


  return (
    <div>
      <div className={styles.box} >
        <div className={styles.changer} >
          <div style={changer ? null : { borderBottom: "3px solid blue" }} onClick={() => setChanger(false)} >Timer</div>
          <div style={changer ? { borderBottom: "3px solid blue" } : null} onClick={() => setChanger(true)}>Stopwatch</div>
        </div>
        {changer ? <Stopwatch></Stopwatch> : <Time></Time>}

      </div>
    </div >
  )

}
export default Todo