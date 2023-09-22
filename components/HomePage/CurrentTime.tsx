'use client'
import { useEffect, useState } from "react"
import styles from '@css/components/CurrentTime.module.css'

export default function CurrentTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getCurrentTime = () => {
        return time.toLocaleString(
            'en-US',
            {
                timeZone: 'Europe/Vilnius',
                hour12: false,
                timeStyle: "medium"
            });
    };

    return <b>{getCurrentTime()}</b>
}
