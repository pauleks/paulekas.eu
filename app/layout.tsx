import '@css/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'paulekas.eu',
    description: 'the virtual home on the web of Paulius',
    viewport: {
        width: 'device-width',
        initialScale: 1
    },
    openGraph: {
        title: 'paulekas.eu',
        description: 'the virtual home on the web of Paulius',
        type: 'website',
        url: 'https://paulekas.eu/',
        images: [
            {
                url: 'https://paulekas.eu/embed.png'
            }
        ]
    },
    twitter: {
        title: 'paulekas.eu',
        description: 'the virtual home on the web of Paulius',
        images: ['https://paulekas.eu/embed.png'],
        card: 'summary_large_image'
    }
}