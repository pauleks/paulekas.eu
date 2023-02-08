'use client'

import { useEffect, useState } from "react";

export default function AnimatedLoadingText() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (step < 3) setStep(step + 1);
            else setStep(0);
        }, 100);
        return () => clearInterval(interval);
    });

    /* use css to animate the dots */
    return <>Loading{[...Array(3)].map((_, i) => <span key={i} style={{ opacity: ((i < step) ? "1" : "0") }}>.</span>)
    }</>;
}