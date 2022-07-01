import styles from './sty.module.css'
import React from 'react'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'


const InputTaker = ({ setWatch, setClick, watch }) => {
    var iss = watch.ss, imn = watch.mn, ihr = watch.hr
    const submitter = (id, e) => {
        setClick(true)
        if (id == "hr") {

            ihr = e
        } if (id == "mn") {
            if (e > 60) {
                alert("invalid input")
            } else {
                imn = e
            }

        } if (id == "ss") {
            if (e > 60) {
                alert("invalid input")
            }
            else {
                iss = e
            }
        }

        if (!(iss == 0 && imn == 0 && ihr == 0)) {
            console.log(watch)
            return setWatch({ ss: iss, mn: imn, hr: ihr })

        }

    }
    return (
        <div>
            <div className={styles.ipbox}>
                <Input onChange={(e) => submitter('hr', e.target.value)} className={styles.ihr} placeholder='00' type='number'></Input ><span className={styles.clddr}>h</span>
                <Input onChange={(e) => submitter('mn', e.target.value)} className={styles.imn} placeholder='00' type='number'></Input><span className={styles.clddr}>m</span>
                <Input onChange={(e) => submitter('ss', e.target.value)} className={styles.iss} placeholder='00' type='number'></Input><span className={styles.clddr}>s</span>


            </div>

        </div>
    )
}

export default InputTaker