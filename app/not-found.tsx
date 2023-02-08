import Link from "next/link"

export default function NotFound() {
    return (
        <>
            <h1 style={{ fontSize: "3rem", marginBottom: "0" }}>Page not found</h1>
            <h2 style={{ opacity: "0.5", marginTop: "0" }}>The page you are looking for does not exist.</h2>
            <br />
            <Link href="/">Try going back to the homepage!</Link>
        </>
    )
}