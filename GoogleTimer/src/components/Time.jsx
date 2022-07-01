import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import InputTaker from './InputTaker'
import ShoTime from './ShoTime'
import styles from './sty.module.css'




const Time = () => {
    const [view, setView] = useState(true)

    const [click, setClick] = useState(true)
    const [watch, setWatch] = useState({
        ss: 0, mn: 5, hr: 0
    })
    const timerid = useRef(null)



    var updtss = watch.ss, updtmn = watch.mn, updthr = watch.hr

    const timrunner = () => {


        if (updtss == 0) {

            if ((updtmn != 0)) {
                updtmn--;
                updtss = 60
            }
            else if (updthr != 0) {
                updtss = 60
            }


        }
        if (updtmn == 0) {
            console.log("mn==0");
            if (updthr != 0) {
                updthr--;
                console.log("hr--");
                updtmn = 59
            }

        }
        if (!(updthr == 0 && updtmn == 0 && updtss == 0)) {

            updtss--
            return setWatch({ ss: updtss, mn: updtmn, hr: updthr })
        }
        else {

            setClick(true)
            clearInterval(timerid.current)
            timerid.current = null
            alert("Time Up")
        }


    }

    const start = () => {
        setView(true)
        if (!timerid.current && click) {

            let id = setInterval(timrunner, 1000)
            timerid.current = id
            setClick(false)
        }
        else {
            clearInterval(timerid.current)
            timerid.current = null
            setClick(true)
        }

    }
    const reset = () => {
        if (!click) {
            setClick(!click)
        }
        setView(true)
        clearInterval(timerid.current)
        setWatch({ ss: 0, mn: 5, hr: 0 })
        timerid.current = null
    }





    return (
        <div>
            <div >

                <hr className={styles.line} />
                <div className={styles.num} >
                    {view ? <ShoTime timerid={timerid} clearInterval={clearInterval}
                        start={start} setWatch={setWatch} setView={setView} watch={watch} ></ShoTime> : <InputTaker setWatch={setWatch} setView={setView} setClick={setClick} watch={watch}></InputTaker>}

                </div>
                <div>
                    <hr className={styles.line2} />
                </div>
                <div className={styles.btn}>
                    <button style={click ? null : { border: '1px solid white', color: 'white', backgroundColor: "rgb(117, 117, 117)" }} className={styles.start} onClick={() => {
                        start()

                    }}>{click ? 'start' : 'stop'}</button>
                    <button className={styles.reset} onClick={reset}>reset</button>
                </div>
            </div>

        </div>
    )
}

export default Time