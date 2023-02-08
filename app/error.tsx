'use client'

import Link from 'next/link';

export default function Error() {
    return (
        <>
            <h1 style={{ fontSize: "3rem", marginBottom: "0" }}>Something went wrong...</h1>
            <h2 style={{ opacity: "0.5", marginTop: "0" }}>An issue happened with the website.</h2>
            <br />
            <Link href="/">Try going back to the homepage!</Link>
            <style jsx>{`
                html, body {
                    background-color: red !important;
                    color: white !important;
                }
            `}</style>
        </>
    );
}