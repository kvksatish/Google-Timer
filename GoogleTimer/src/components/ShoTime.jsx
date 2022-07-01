import React from 'react'
import styles from './sty.module.css'

const ShoTime = ({ setWatch, watch, setView, timerid, clearInterval }) => {
    return (
        <div><div onClick={() => {
            alert("CountDount will be lost")
            console.log("zero")
            clearInterval(timerid.current)
            timerid.current = null
            setWatch({ ss: 0, mn: 0, hr: 0 })
            setView(false)

        }} className={styles.wtxt}>
            <p>
                <span className={styles.hr}>{watch.hr == 0 ? null :
                    watch.hr}</span>
                <span>{watch.hr == 0 ? null :
                    'h '}</span>

                <span className={styles.mn}>{watch.mn == 0 ? null : watch.mn}</span><span>{watch.mn == 0 ? null :
                    'm '}</span>

                <span className={styles.ss}>{watch.ss < 10 ? '0' + watch.ss : watch.ss}</span>s


            </p>
        </div></div>
    )
}

export default ShoTime