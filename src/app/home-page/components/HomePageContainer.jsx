/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
        buttons: [
            {
                id: 0,
                title: 'App Store',
                link: 'https://apps.apple.com/vn/app/id1270094982',
            },
            {
                id: 1,
                title: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.emddi.customer',
            },
        ],
    },
    {
        image: images.buttaLanding,
        imageLink: 'https://apps.apple.com/vn/app/id1502420086',
        companyName: 'BUTTA Tech',
        position: 'Mobile Developer',
        productName: 'Buddhist Social Networking',
        productDes:
            'Butta is a social network for Vietnamese Buddhists, a place to learn, propagate Buddhism, and update information from the Vietnam Buddhist Sangha and around the world.',
        buttons: [
            {
                id: 0,
                title: 'App Store',
                link: 'https://apps.apple.com/vn/app/id1502420086',
            },
            {
                id: 1,
                title: 'Play Store',
                link: 'https://play.google.com/store/apps/details?id=com.buttatech.butta',
            },
        ],
    },
    {
        image: images.beeguruCover,
        imageLink: 'https://apps.apple.com/vn/app/id1529227937',
        companyName: 'Beeguru',
        position: 'Mobile developer, UX/UI Designer',
        productName: 'BeeGuru Learning app',
        productDes:
            'The application provides learning lessons for students from grades 1-12 in Vietnam, including many subjects such as math, physics, chemistry, English, ... in the form of written and audio articles.',
        buttons: [
            {
                id: 0,
                title: 'App Store',
                link: 'https://apps.apple.com/vn/app/id1529227937',
            },
        ],
    },
    {
        image: images.mylocalAsimCover,
        imageLink: 'https://scene.zeplin.io/project/6112dbd6774efe87df508345',
        companyName: 'Emddi',
        position: 'UI/UX Designer • Web App Developer',
        productName: 'MyLocal Taxi - ASIM',
        productDes:
            'Integrate taxi booking feature on MyLocal mobile app. This part is written in webapp NextJS and integrated into Flutter app',
        buttons: [
            {
                id: 0,
                title: 'App Store',
                link: 'https://apps.apple.com/vn/app/id1543101669',
            },
            {
                id: 1,
                title: 'Public Design',
                link: 'https://scene.zeplin.io/project/6112dbd6774efe87df508345',
            },
        ],
    },
    {
        image: images.heydriverCover,
        imageLink: 'https://apps.apple.com/vn/app/id1526645448',
        companyName: 'Emddi',
        position: 'UI/UX Designer • Mobile Developer',
        productName: 'Hey - Hey Driver',
        productDes:
            'Hey is an app to book an intercity car, airport taxis. You can schedule an appointment in advance, book the whole car or certain seats in the car, create a trip, the driver will search for a ride that matches their route and receive the ride.',
        buttons: [
            {
                id: 0,
                title: 'Hey iOS',
                link: 'https://apps.apple.com/vn/app/id1526440131',
            },
            {
                id: 1,
                title: 'Hey Android',
                link: 'https://play.google.com/store/apps/details?id=com.emddi.xetienchuyen.customer',
            },
            {
                id: 3,
                title: 'Hey Driver iOS',
                link: 'https://apps.apple.com/vn/app/id1526645448',
            },
            {
                id: 4,
                title: 'Hey Driver Android',
                link: 'https://play.google.com/store/apps/details?id=com.emddi.xetienchuyen.driver',
            },
        ],
    },
]

const normalText =
    'text-white text-sm sm:text-xl font-light sm:font-thin hover:font-semibold duration-300'

const Home = () => {
    return (
        <div className="flex flex-1 flex-col w-full h-screen bg-black p-4 sm:p-9">
            <div className="flex flex-row justify-between mt-4 sm:mt-0">
                <div className="flex flex-row items-center text-sm sm:text-xl justify-center w-full sm:w-auto">
                    <p className={normalText}>{`Tai Pham`}</p>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <p className={normalText}>{`Frontend Developer`}</p>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <p className={normalText}>{`UI/UX Designer`}</p>
                </div>
                <div className="flex-row items-center hidden sm:flex">
                    <p className={normalText}>{`Works`}</p>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <p className={normalText}>{`Pet projects`}</p>
                    <div className="text-white mx-1 sm:mx-2">|</div>
                    <p className={normalText}>{`Experiments`}</p>
                </div>
            </div>
            <div className="flex flex-col sm:hidden self-center mt-16 items-center">
                <div className="flex w-28 h-28">
                    <img className="flex flex-1" src={images.avatar} />
                </div>
                <p className="text-white text-2xl font-light mt-6">
                    Hello, i’m Tai
                </p>
            </div>
            <div className="flex flex-1 flex-col justify-start sm:justify-center mt-12 sm:mt-0 pl-0 sm:pl-9">
                <p className="text-white text-center sm:text-left text-3xl sm:text-5xl font-thin pr-0 sm:pr-36 sm:leading-tight leading-snug">
                    I love humanize digital user experience, designing
                    mobile/web
                    <br />
                    with <span className="font-bold">Figma</span>, build with{' '}
                    <span className="font-bold">
                        React Native, ReactJS, NextJS, Flutter
                    </span>
                    <br />
                    and want to try <span className="font-bold">SwiftUI</span>
                </p>
            </div>
            <div className="flex flex-row items-center ml-auto justify-center sm:justify-start w-full sm:w-auto">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://dribbble.com/taipham1803'}
                    className={normalText}>{`dribbble`}</a>
                <div className="text-white mx-2">|</div>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://github.com/taipham1803'}
                    className={normalText}>{`github`}</a>
                <div className="text-white mx-2">|</div>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://twitter.com/heyry_pro'}
                    className={normalText}>{`twitter`}</a>
                <div className="text-white mx-2">|</div>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={'https://www.linkedin.com/in/tai-pham-dev'}
                    className={normalText}>{`linkedin`}</a>
            </div>
        </div>
    )
}

const imageStyle =
    'flex flex-1 sm:w-72 md:w-88 lg:w-96 sm:h-48 md:h-56 lg:h-72 xl:h-96 mr-0 rounded-2xl shadow-xl transform hover:-translate-y-2'
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
                    buttons,
                } = item
                const isStart = index % 2 === 0
                const reverseStyle = isStart
                    ? 'sm:flex-row sm:items-center'
                    : 'sm:flex-row-reverse sm:items-center'
                const marginStyle = isStart ? 'sm:mr-12' : 'sm:ml-12'
                return (
                    <div
                        key={productName}
                        className={classNames(
                            'flex flex-col mt-6 sm:mt-16',
                            reverseStyle
                        )}>
                        <a
                            href={imageLink}
                            target="_blank"
                            rel="noreferrer"
                            className={classNames(
                                imageStyle,
                                marginStyle,
                                hoverAnim,
                                hoverScale
                            )}>
                            <img
                                className="flex flex-1 object-cover rounded-xl"
                                alt="product-cover"
                                src={image}
                            />
                        </a>
                        <div className="flex flex-1 flex-col justify-center mt-4 sm:mt-0">
                            <p className="text-gray-1 text-center sm:text-left mt-4 sm:mt-0 font-bold text-xl">
                                {`${companyName}  •  ${position}`}
                            </p>
                            <p className="text-black text-center sm:text-left mt-4 sm:mt-2.5 text-3xl font-bold">
                                {productName}
                            </p>
                            <p className="text-gray-1 text-center sm:text-left text-xl mt-2.5">
                                {productDes}
                            </p>
                            <div className="flex flex-wrap sm:flex-row mt-3 mb-4 sm:mb-0 justify-center sm:justify-start">
                                {buttons.map(button => {
                                    return (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={button.link}
                                            key={`button-${productName}-${button.title}`}
                                            className={classNames(
                                                'transaction duration-500 group flex bg-gray-2 rounded-full h-12 px-4 min-w-min items-center justify-center mr-2 hover:bg-black mt-4'
                                            )}>
                                            <p className="transaction duration-500 text-black text-lg group-hover:text-white">
                                                {button.title}
                                            </p>
                                        </a>
                                    )
                                })}
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
