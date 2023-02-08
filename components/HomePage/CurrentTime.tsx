'use client'
import { useEffect, useState } from "react"
import styles from '@css/components/CurrentTime.module.css'

export default function CurrentTime() {
    const timeOffset = 2;

    const [currentTime, setCurrentTime] = useState("");

    function offsetDigits(digit: number) {
        return digit.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date(),
                hours =
                    time.getUTCHours() + timeOffset < 24
                        ? time.getUTCHours() + timeOffset
                        : time.getUTCHours() - 24 + timeOffset,
                minutes = time.getUTCMinutes();

            setCurrentTime(`${offsetDigits(hours)}:${offsetDigits(minutes)}`);
        }, 1000);
        return () => clearInterval(interval);
    });


    return <b className={`${styles.timeText} ${(currentTime == "" ? styles.blur : "")}`}>{currentTime == "" ? "00:00" : currentTime}</b>
}