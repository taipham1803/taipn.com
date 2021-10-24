import Link from 'next/link'
import PropTypes from 'prop-types'

const NavStyle = () => (
    <style>
        {`
            #nav {
                z-index: 100;
            }
        `}
    </style>
)

const Nav = () => {
    return (
        <>
            <nav id="nav" className="w-full md:fixed top-0 left-0">
                <div className="flex justify-between items-center py-4 px-6 md:px-16">
                    <Link href="/">
                        <a>
                            <img src="/logo.png" className="w-16 mr-4" />
                        </a>
                    </Link>
                </div>
            </nav>
            <NavStyle />
        </>
    )
}

Nav.propTypes = {
    setSidebarOpen: PropTypes.func.isRequired,
}

export default Nav
