import ScrollAnimation from 'react-animate-on-scroll'
import Head from 'next/head'
import { images } from 'config/assets'
import classNames from 'classnames'

const myWorks = [
    {
        image: images.emddiCover,
        imageLink: 'https://apps.apple.com/vn/app/id1270094982',
        companyName: 'EMDDI',
        position: 'Mobile developer, UI/UX Designer',
        productName: 'Ride-hailing Taxi app',
        productDes:
            'A new on-demand ride-hailing platform developed by scientists and engineers from VNU, designed for large scale business operations with sophisticated core technologies.',
        buttonTitle: 'AppStore',
        buttonLink: '',
    },
    {
        image: images.buttaLanding,
        imageLink: 'https://apps.apple.com/vn/app/id1502420086',
        companyName: 'BUTTA Tech',
        position: 'Mobile Developer',
        productName: 'Buddhist Social Networking',
        productDes:
            'Butta is a social network for Vietnamese Buddhists, a place to learn, propagate Buddhism, and update information from the Vietnam Buddhist Sangha and around the world.',
        buttonTitle: 'AppStore',
        buttonLink: '',
    },
    {
        image: images.beeguruCover,
        imageLink: 'https://apps.apple.com/vn/app/id1529227937',
        companyName: 'Beeguru tech',
        position: 'Mobile developer, UX/UI Designer',
        productName: 'BeeGuru Learning app',
        productDes:
            'A new on-demand ride-hailing platform developed by scientists and engineers from VNU, designed for large scale business operations with sophisticated core technologies.',
        buttonTitle: 'AppStore',
        buttonLink: '',
    },
    {
        image: images.mylocalAsimCover,
        imageLink: 'https://apps.apple.com/vn/app/id1543101669',
        companyName: 'Emddi',
        position: 'UI/UX Designer • Web App Developer',
        productName: 'MyLocal Taxi - ASIM',
        productDes:
            'Integrate taxi booking feature on MyLocal mobile app. This part is written in webapp NextJS and integrated into Flutter app',
        buttonTitle: 'App Store',
        buttonLink: '',
    },
    {
        image: images.heydriverCover,
        imageLink: 'https://apps.apple.com/vn/app/id1526645448',
        companyName: 'Emddi',
        position: 'UI/UX Designer • Mobile Developer',
        productName: 'Hey - Hey Driver',
        productDes:
            'Hey is an app to book an intercity car, airport taxis. You can schedule an appointment in advance, book the whole car or certain seats in the car, create a trip, the driver will search for a ride that matches their route and receive the ride.',
        buttonTitle: 'App Store',
        buttonLink: '',
    },
]

const normalText =
    'text-white text-sm sm:text-xl font-thin hover:font-semibold duration-300'

const Home = () => {
    return (
        <div className="flex flex-1 flex-col w-full h-screen bg-black p-4 sm:p-9">
            <div className="flex flex-row justify-between mt-4 sm:mt-0">
                <div className="flex flex-row items-center text-sm sm:text-xl justify-center w-full sm:w-auto">
                    <div className={normalText}>{`Tai Pham`}</div>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <div className={normalText}>{`Frontend Developer`}</div>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <div className={normalText}>{`UI/UX Designer`}</div>
                </div>
                <div className="flex-row items-center hidden sm:flex">
                    <div className={normalText}>{`Works`}</div>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <div className={normalText}>{`Pet projects`}</div>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <div className={normalText}>{`Experiments`}</div>
                </div>
            </div>
            <div className="flex flex-col sm:hidden self-center mt-16 items-center">
                <div className="flex w-28 h-28">
                    <img className="flex flex-1" src={images.avatarCute} />
                </div>
                <div className="flex text-white text-2xl font-light mt-6">
                    Hello, i’m Tai
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-start sm:justify-center mt-12 sm:mt-0 pl-0 sm:pl-9">
                <div className="text-white text-center sm:text-left text-3xl sm:text-5xl font-thin pr-0 sm:pr-36 sm:leading-tight leading-snug">
                    I love humanize digital user experience, design mobile/web
                    <br />
                    with <span className="font-bold">Figma</span>, build with{' '}
                    <span className="font-bold">
                        React Native, ReactJS, NextJS, Flutter
                    </span>
                    <br />
                    and want to try  <span className="font-bold">SwiftUI</span>
                </div>
            </div>
            <div className="flex flex-row items-center ml-auto justify-center sm:justify-start w-full sm:w-auto">
                <a href={'https://dribbble.com/taipham1803'} className={normalText}>{`dribbble`}</a>
                <div className="text-white mx-2">|</div>
                <a href={'https://github.com/taipham1803'} className={normalText}>{`github`}</a>
                <div className="text-white mx-2">|</div>
                <a href={'https://twitter.com/heyry_pro'} className={normalText}>{`twitter`}</a>
                <div className="text-white mx-2">|</div>
                <a href={'https://www.linkedin.com/in/tai-pham-dev'} className={normalText}>{`linkedin`}</a>
            </div>
        </div>
    )
}

const imageStyle =
    'flex flex-1 h-96 mr-0 sm:mr-12 rounded-2xl shadow-xl transform hover:-translate-y-2'
const hoverTransition = 'transition ease-in-out'
const hoverScale = 'hover:scale-102'
const hoverAnim = 'duration-500 transform hover:-translate-y-2'

const Works = () => {
    return (
        <div className="flex-1 w-screen bg-white p-6 sm:p-14">
            <div className="text-black font-bold text-3xl sm:text-5xl">
                Works
            </div>
            {myWorks.map((item, index) => {
                const {
                    image,
                    imageLink,
                    companyName,
                    position,
                    productDes,
                    productName,
                    buttonLink,
                    buttonTitle,
                } = item
                const isStart = index % 2 === 0
                const reverseStyle = isStart ? 'sm:flex-row' : 'sm:flex-row-reverse'
                return (
                    <div
                        key={productName}
                        className={classNames(
                            'flex flex-col mt-6 sm:mt-16',
                            reverseStyle
                        )}>
                        <img
                            className={classNames(
                                imageStyle,
                                hoverAnim,
                                hoverScale
                            )}
                            alt="product-cover"
                            src={image}
                        />
                        <div className="flex flex-1 flex-col justify-center mt-4 sm:mt-0">
                            <div className="flex text-gray-1 text-center sm:text-left font-bold text-xl">
                                {`${companyName}  •  ${position}`}
                            </div>
                            <div className="flex text-black text-center sm:text-left mt-2.5 text-3xl font-bold">
                                {productName}
                            </div>
                            <div className="flex text-gray-1 text-center sm:text-left text-xl mt-2.5">
                                {productDes}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const HomePageContainer = props => {
    return (
        <>
            <Home />
            <Works />
        </>
    )
}

export default HomePageContainer
