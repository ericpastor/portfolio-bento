import { CertificatesScroll } from "@/app/certificatesScroll";
import ThemeSwitch from "@/components/themeSwith";
import { Lamp } from "@/components/ui/lamp";
import { IconAddressBook, IconApi, IconAppWindowFilled, IconBeer, IconBrandGithub, IconBrandLinkedin, IconCodeCircle2, IconPresentation, IconShip, IconShoppingBag } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import LogoName from '@/utils/images/logo-name.svg'
import CommProject from '@/utils/images/comm-project.png'
import BreweriesProject from '@/utils/images/breweries-project.png'
import PortfolioProject from '@/utils/images/portfolio-project.png'

const SkeletonOne = () => (
    <div id="top" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-300 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <Image src={LogoName} alt="logo-followed-by-name" />
            <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">ASPIRING JUNIOR FULL STACK DEVELOPER</p>
        </div>
    </div>
);

const SkeletonTwo = () => (
    <div className="flex w-full h-full rounded-xl items-center justify-center bg-gradient-to-br from-gray-300 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <div className=" flex flex-col items-center justify-center mt-2">
            <p className="font-sans text-lg font-bold text-logo-blue dark:text-logo-blue mb-1 mt-1">AboutMe</p>
            <p className="font-sans font-normal text-neutral-600 text-xs text-center dark:text-neutral-300 mb2 mt-1 px-2 pb-1">
                During my <a className="font-bold">bachelor&apos;s degree</a> studies in   <a className="font-bold">Nautical and Maritime Transport</a>, I delved into <a className="font-bold">engineering</a> subjects like
                mathematics, physics, informatics, naval electricity and electronics, and automatic regulation and control.
                My <a className="font-bold">interest in programming sparked</a> while studying <a className="font-bold">creating apps</a> to
                address challenges related to ship stability and celestial navigation. In August 2022, I
                embarked on a self-study journey through the <a className="font-bold">Full Stack Open</a> online course, reigniting
                my <a className="font-bold">passion for problem-solving through coding.</a></p>
        </div>
    </div>
);

const SkeletonThree = () => (
    <div className="flex w-full h-full rounded-xl items-center justify-center bg-gradient-to-br from-gray-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <div className="flex flex-col items-center justify-center mt-2">
            <p className="font-sans font-bold text-lg text-logo-blue dark:text-logo-blue mb-2 mt-2">Education</p>

            <p className="text-center font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
                FULL STACK DEVELOPMENT PROGRAM &#10098;FULL-TIME&#10099;
            </p>
            <p className="text-center font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
                Integrify Academy | Helsinki, Finland | August 2023 - Present
            </p>
            <hr className="my-3 h-0.5 bg-black-700 opacity-100 dark:opacity-100 mb2 mt-2 px-6"></hr>
            <p className="text-center font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
                BACHELOR’S DEGREE IN NAUTICAL SCIENCE AND MARITIME TRANSPORT
            </p>
            <p className="text-center font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
                Universitat Politècnica de Catalunya | Barcelona, Spain | September 2014 - February 2019
            </p>
        </div>
    </div>
);

const SkeletonFour = () => (
    <div className="flex w-full h-full rounded-xl items-center justify-center bg-gradient-to-br from-gray-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Lamp />
    </div>
);

const SkeletonFive = () => (
    <div className="relative flex w-full h-full rounded-xl items-center justify-center overflow-hidden shadow-md hover:shadow-lg">
        <Image src={CommProject} alt="fake e-commerce" className="w-full h-full object-cover brightness-50 ease-in-out hover:brightness-75" />
        <div className="absolute inset-15 flex items-center gap-2 justify-center">
            <Link href="https://guileless-trifle-3116f5.netlify.app/" rel="noopener noreferrer" target="_blank">
                <IconAppWindowFilled className="w-8 h-8 cursor-pointer text-logo-blue brightness-90 ease-in-out hover:brightness-100" />
            </Link>

            <Link href="https://github.com/ericpastor/Comm-E-Commerce-frontend" rel="noopener noreferrer" target="_blank">
                <IconCodeCircle2 className="w-8 h-8 cursor-pointer cursor-pointer text-yellow-200 brightness-90 ease-in-out hover:brightness-100" />
            </Link>

            <Link href="https://comm2024.azurewebsites.net/index.html" rel="noopener noreferrer" target="_blank">
                <IconApi className="w-8 h-8 cursor-pointer text-green-400 brightness-90 ease-in-out hover:brightness-100" />
            </Link>
        </div>
    </div>
);

const SkeletonSix = () => (
    <div className="relative flex w-full h-full rounded-xl items-center justify-center overflow-hidden shadow-md hover:shadow-lg">
        <Image src={BreweriesProject} alt="breweries search" className="w-full h-full object-cover brightness-50 ease-in-out hover:brightness-75" />
        <div className="absolute inset-15 flex items-center gap-2 justify-center">
            <Link href="https://ephemeral-custard-b47be4.netlify.app/" rel="noopener noreferrer" target="_blank">
                <IconAppWindowFilled className="w-8 h-8 cursor-pointer text-logo-blue brightness-90 ease-in-out hover:brightness-100" />
            </Link>
            <Link href="https://github.com/ericpastor/fs16_5-React-Breweries" rel="noopener noreferrer" target="_blank">
                <IconCodeCircle2 className="w-8 h-8 cursor-pointer cursor-pointer text-yellow-200 brightness-90 ease-in-out hover:brightness-100" />
            </Link>
        </div>
    </div>
);

const SkeletonSeven = () => (
    <div className="relative flex w-full h-full rounded-xl items-center justify-center overflow-hidden shadow-md hover:shadow-lg">
        <Image src={PortfolioProject} alt="breweries search" className="w-full h-full object-cover brightness-50 ease-in-out hover:brightness-75" />
        <div className="absolute inset-15 flex items-center gap-2 justify-center">
            <Link href="https://ephemeral-custard-b47be4.netlify.app/" rel="noopener noreferrer" target="_blank">
                <IconCodeCircle2 className="w-8 h-8 cursor-pointer cursor-pointer text-yellow-200 brightness-90 ease-in-out hover:brightness-100" />
            </Link>
        </div>
    </div>
);

const SkeletonEight = () => (
    <div className="flex w-full h-full rounded-xl items-center justify-center bg-gradient-to-br from-gray-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <CertificatesScroll />
    </div>
);

const SkeletonNine = () => (
    <div id="contact" className="flex w-full h-full rounded-xl items-center justify-center bg-gradient-to-br from-gray-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <div className="flex flex-col items-center justify-center mt-2">
            <p className="font-sans font-bold text-logo-blue dark:text-logo-blu-light mb-2 mt-2">CONTACT</p>

            <p className="text-center font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
                FINLAND
            </p>
            <p className="text-center font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
                +358 44 921 1012
            </p>
            <p className="text-center font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
                ericpastorpadial@gmail.com
            </p>
            <hr className="my-3 h-0.5 bg-black-700 opacity-100 dark:opacity-100 mb2 mt-4 px-6"></hr>
            <div className="flex justify-content-center gap-2">
                <Link href="https://www.linkedin.com/in/eric-pastor-padial" rel="noopener noreferrer" target="_blank">
                    <IconBrandLinkedin className="w-6 h-6 cursor-pointer cursor-pointer text-blue-600 brightness-90 ease-in-out hover:brightness-100" />
                </Link>
                <Link href="https://github.com/ericpastor?tab=repositories" rel="noopener noreferrer" target="_blank">
                    <IconBrandGithub className="w-6 h-6 cursor-pointer cursor-pointer text-purple-500 brightness-90 ease-in-out hover:brightness-100" />
                </Link>
            </div>
            <hr className="my-3 h-0.5 bg-black-700 opacity-100 dark:opacity-100 mb-1 mt-4 px-6"></hr>
            <div className="flex justify-content-center">
                <Link href="#top">
                    <Image src={LogoName} className="cursor-pointer" alt="logo-followed-by-name" />
                </Link>
            </div>
        </div>
    </div>
);

const items = [
    {
        title: "Hello, I'm Eric!",
        description:
            "Sailing to my next port: Software development!",
        header: <SkeletonOne />,
        icon: <IconShip className="h-4 w-4 text-logo-blue-light" />,
        iconBottomOne:
            <Link href="#contact">
                <IconAddressBook className="w-6 h-6 cursor-pointer cursor-pointer text-logo-blue brightness-90 ease-in-out hover:brightness-100" />
            </Link>,
        iconBottomTwo:
            <Link href="https://www.linkedin.com/in/eric-pastor-padial" rel="noopener noreferrer" target="_blank">
                <IconBrandLinkedin className="w-6 h-6 cursor-pointer cursor-pointer text-blue-600 brightness-90 ease-in-out hover:brightness-100" />
            </Link>,
        iconBottomThree:
            <Link href="https://github.com/ericpastor?tab=repositories" rel="noopener noreferrer" target="_blank">
                <IconBrandGithub className="w-6 h-6 cursor-pointer cursor-pointer text-purple-500 brightness-90 ease-in-out hover:brightness-100" />
            </Link>,
        theme: <ThemeSwitch />
    },
    {
        header: <SkeletonTwo />,
    },
    {
        header: <SkeletonThree />,
    },
    {
        header: <SkeletonFour />,

    },
    {
        title: "COMM fake e-commerce",
        description: "An e-commerce app utilizing an API created wiht C# .NET for data retrieval. Technologies used in Frontend: Formik, Material-UI, React, React Router, Redux, Rest API, TypeScript, and zup.",
        header: <SkeletonFive />,
        icon: <IconShoppingBag className="h-4 w-4 text-orange-500" />,
    },

    {
        title: "Breweries info app",
        description: "Users can explore information about specific companies, search for companies by name through a dedicated search component, and benefit from row coloring for visual distinction between different sets of information.",
        header: <SkeletonSix />,
        icon: <IconBeer className="h-4 w-4 text-yellow-500" />,
    },
    {
        title: "My Portfolio",
        description: `My portfolio is built using Next.js, TypeScript, Tailwind CSS, and Aceternity UI with a styled Bento distribution. Leveraging the power of Next.js, I've created a dynamic and fast website. Check the code...`,
        header: <SkeletonSeven />,
        icon: <IconPresentation className="h-4 w-4 text-logo-blue" />,
    },
    {
        header: <SkeletonEight />,
    },
    {
        header: <SkeletonNine />,
    },
];

export default items;