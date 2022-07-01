import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import styles from './sty.module.css'




const Stopwatch = () => {
    const [click, setClick] = useState(true)
    const [watch, setWatch] = useState({
        ms: 0, ss: 0, mn: 0, hr: 0
    })
    const timerid = useRef(null)

    var updtms = watch.ms, updtss = watch.ss, updtmn = watch.mn, updthr = watch.hr

    const timrunner = () => {
        if (updtms == 100) {
            updtss++;
            updtms = 0
        }
        if (updtss == 60) {
            updtmn++;
            updtss = 0
        }
        if (updtmn == 60) {
            updthr++;
            updtmn = 0
        }
        updtms++
        return setWatch({ ms: updtms, ss: updtss, mn: updtmn, hr: updthr })
    }

    const start = () => {

        if (!timerid.current) {

            let id = setInterval(timrunner, 10)
            timerid.current = id
        }
        else {
            clearInterval(timerid.current)
            timerid.current = null
        }

    }
    const reset = () => {
        if (!click) {
            setClick(!click)
        }

        clearInterval(timerid.current)
        setWatch({ ms: 0, ss: 0, mn: 0, hr: 0 })
        timerid.current = null
    }

    return (
        <div>
            <div >

                <hr />
                <div className={styles.num} >
                    <div className={styles.wtxt}>
                        <p>
                            <span className={styles.hr}>{watch.hr == 0 ? null : watch.hr}</span>
                            <span className={styles.mn}>{watch.mn == 0 ? null : watch.mn}</span>
                            <span className={styles.ss}>{watch.ss}</span>S
                            <span className={styles.ms}>   {watch.ms < 10 ? '0' + watch.ms : watch.ms}</span>


                        </p>
                    </div>
                </div>
                <div>
                    <hr />
                </div>

                <div className={styles.btn}>
                    <button style={click ? null : { border: '1px solid white', color: 'white', backgroundColor: "rgb(117, 117, 117)" }} className={styles.start} onClick={() => {
                        start()
                        setClick(!click)
                    }}>{click ? 'start' : 'stop'}</button>
                    <button className={styles.reset} onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch