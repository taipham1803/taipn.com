import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Nav from 'app/main-app/components/Nav'
import Footer from 'app/main-app/components/Footer'
import { useEffect, useState } from 'react'
import Sidebar from 'app/main-app/components/Sidebar'
import { useRouter } from 'next/router'

const MainApp = ({ Component, pageProps }) => {
    const router = useRouter()

    const handleRouteChange = url => {
        window.gtag('config', '[Tracking ID]', {
            page_path: url,
        })

        import('react-facebook-pixel')
            .then(x => x.default)
            .then(ReactPixel => {
                ReactPixel.init('421927635951889') // facebookPixelId
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    const [_sidebarOpen, _setSidebarOpen] = useState(false)

    return (
        <>
            <NextSeo
                title="taipn.com"
                description="Tai's personal website"
                openGraph={{
                    url: 'https://taipn.com',
                    title: 'taipn.com',
                    description:
                        `Tai's personal website`,
                    images: [
                        {
                            url: 'taipn.com/avatar.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Taipn portfolio',
                        },
                    ],
                    site_name: 'taipn',
                }}
            />
            <div className="relative">
                {/* <Nav setSidebarOpen={_setSidebarOpen} /> */}
                <Sidebar setSidebarOpen={_setSidebarOpen} />
                <div>
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainApp
