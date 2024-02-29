import { CertificatesScroll } from "@/app/certificatesScroll";
import ThemeSwitch from "@/components/themeSwith";
import { Lamp } from "@/components/ui/lamp";
import { IconAddressBook, IconApi, IconBrandGithub, IconBrandLinkedin, IconCodeCircle2, IconPresentation, IconShip } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import LogoName from '@/utils/images/logo-name.svg'
import LogoSubs from '@/utils/images/logo-subs.svg'
import Comic from '@/utils/images/comic.jpg'

const SkeletonOne = () => (
    <div className=" flex flex-col items-center justify-center mt-0">
        <Image src={LogoSubs} alt="logo-followed-by-name" />
    </div>
);

const SkeletonTwo = () => (
    <div className="flex flex-col items-center justify-center mt-1 relative overflow-hidden -mb-6">
        <div className="flex items-center">
            <div>
                <Image src={Comic} alt="me-sailing" className="w-10 h-10 rounded-full object-cover mx-3" />
            </div>
            <div className="flex flex-col items-start justify-center">
                <strong className="font-sans text-xl font-bold text-logo-blue ">About Me</strong>
                <span className="font-sans text-xs text-logo-blue ">&ldquo;I like to sail&code!&rdquo; 🌊</span>
            </div>
        </div>
        <p className="leading-5 font-sans font-normal text-xs text-center text-neutral-300 -mb-1 mt-3 px-2  z-10 pb-1">
            My two passions are <a className="font-bold">the sea</a> and <a className="font-bold">coding. </a>
            I started my <a className="font-bold">programming journey</a> because while being at the University I <a className="font-bold">enjoyed creating apps</a> related to ship stability and celestial navigation. </p>
        <p className="leading-5 font-sans font-normal text-xs text-center text-neutral-300 -mb-1 mt-3 px-2  z-10 pb-1">
            If you ask someone who knows me two traits about me, the answer will be:</p>
        <p className="leading-5 font-sans font-bold text-xs text-center text-neutral-300 mt-4">&ldquo;...he is hardworking and likes to help...&rdquo;</p>

    </div>
);

const SkeletonSix = () => (
    <div className="flex flex-col items-center justify-center mt-2 -mb-4">
        <p className="font-sans font-bold text-lg text-logo-blue dark:text-logo-blue -mt-2 mb-3">Education</p>

        <p className="text-center font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300 mb-1 mt-1 px-4 pb-1">
            FULL STACK DEVELOPMENT PROGRAM &#10098;FULL-TIME&#10099;
        </p>
        <p className="text-center font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
            Integrify Academy | Helsinki, Finland | August 2023 - Present
        </p>
        <hr className="my-3 h-0.5 bg-logo-blue mb2 mt-2 px-6"></hr>
        <p className="text-center font-sans font-bold text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
            BACHELOR’S DEGREE IN NAUTICAL SCIENCE AND MARITIME TRANSPORT
        </p>
        <p className="text-center font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb1 mt-1 px-4 pb-1">
            Universitat Politècnica de Catalunya | Barcelona, Spain | September 2014 - February 2019
        </p>
    </div>
);

const SkeletonFive = () => (
    <>
        <div className="flex flex-col items-center justify-center">
            <p className="font-sans text-lg text-center font-bold text-logo-blue dark:text-logo-blue -mb-3 -mt-2">Certificates</p>
        </div>
        <div className="flex w-full h-full rounded-xl items-center justify-center bg-card-start">
            <CertificatesScroll />
        </div>
    </>
);

const SkeletonFour = () => (
    <Lamp title="Technology Learning Path" />
);

const SkeletonThree = () => (
    <Lamp title="New technology coming up" />
);

const SkeletonSeven = () => (
    <div className="relative flex w-full h-full rounded-xl items-center justify-center overflow-hidden -mb-10">
        <video autoPlay loop muted className="w-full h-full object-cover brightness-50 ease-in-out hover:brightness-75">
            < source src='../../comm.mp4' type="video/mp4" />
            Video not supported
        </video >
        <p className="absolute -top-12 left-0 right-0 bottom-0 flex items-center justify-center font-sans font-bold text-white text-2xl mb-3">
            Full Stack Project
        </p>
        <p className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center font-sans font-bold text-white text-xl">
            Fake e-commerce
        </p>
    </div >
);

const SkeletonEight = () => (
    <div className="grid grid-cols-5 grid-rows-2 gap-1 -mb-20">

        <div className="col-span-4">
            <p className="font-sans font-bold text-lg text-logo-blue brightness-90">COMM</p>
            <hr className="my-3 h-0.25 border-logo-blue mt-1 px-6" style={{ color: '#4dc5ff' }}></hr>
            <p className="font-sans font-normal text-neutral-300 text-xs max-w-lg">
                This full-stack e-commerce platform offers a seamless online shopping experience, featuring user-friendly interfaces for customers and administrators alike. Users can effortlessly browse a diverse product catalog, add items to their shopping cart, and complete an order. Admins benefit from an intuitive dashboard, facilitating efficient product and order management. The authentication is made with JSON Web Tokens (JWT).
            </p>
        </div>
        <div className="row-span-2 col-span-1">
            <p className="font-bold text-center text-purple-400 brightness-90 mt-1">Links</p>
            <hr className="mx-auto my-4 h-0.25 border-purple-400 mt-1 px-6 brightness-90 w-1/2" style={{ color: 'rgb(192 132 252)' }}></hr>
            <div className="flex flex-col items-center justify-center brightness-50 ease-in-out hover:brightness-150 mb-2 -mt-1">
                <Link href="https://guileless-trifle-3116f5.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <IconPresentation className="w-6 h-6 object-cover text-yellow-200 mt-2 z-40 " />
                </Link>
                <p className="font-sans font-bold text-center text-yellow-200 text-xs">Website</p>
            </div>
            <div className="flex flex-col items-center justify-center brightness-50 ease-in-out hover:brightness-150 mb-2">
                <Link href="https://github.com/ericpastor/Comm-E-Commerce-frontend" rel="noopener noreferrer" target="_blank">
                    <IconCodeCircle2 className="w-6 h-6 object-cover text-logo-blue mt-2 z-40 " />
                </Link>
                <p className="font-sans font-bold text-center text-logo-blue text-xs">Frontend</p>
            </div>
            <div className="flex flex-col items-center justify-center brightness-50 ease-in-out hover:brightness-150 mb-2">
                <Link href="https://comm2024.azurewebsites.net/index.html" rel="noopener noreferrer" target="_blank">
                    <IconApi className="w-6 h-6 object-cover text-green-400 mt-2 z-4 " />
                </Link>
                <p className="font-sans font-bold text-center text-green-400 text-xs">WebApi</p>
            </div>
            <div className="flex flex-col items-center justify-center brightness-50 ease-in-out hover:brightness-150 mb-2">
                <Link href="  https://github.com/ericpastor/Comm-E-Commerce-backend" rel="noopener noreferrer" target="_blank">
                    <IconCodeCircle2 className="w-6 h-6 object-cover text-blue-500  mt-2 z-40 " />
                </Link>
                <p className="font-sans font-bold text-center text-blue-500  text-xs">Backend</p>
            </div>
        </div>
        <div className="col-span-2 mt-4">
            <p className="font-bold text-logo-blue-light brightness-90">Frontend</p>
            <hr className="my-3 h-0.25 border-logo-blue mt-1 px-6 brightness-90" style={{ color: '#4dc5ff' }}></hr>
            <p className="font-sans font-normal text-neutral-300 text-xs">
                JavaScript, TypeScript, React, React Router, Redux, Material UI, Formik, Yup, and Sonner</p>
        </div>

        <div className="col-span-2 mt-4">
            <p className="font-bold text-green-400 brightness-90">Backend</p>
            <hr className="my-3 h-0.25 border-green-400 mt-1 px-6 brightness-90" style={{ color: 'rgb(74 222 128)' }}></hr>
            <p className="font-sans font-normal text-neutral-300 text-xs">
                C#, ASP.NET Core, Entity Framework Core, and PostgreSQL</p>
        </div>
    </div>
);




const SkeletonNine = () => (
    <div className="grid grid-cols-5 grid-rows-2 gap-1 -mb-20">

        <div className="col-span-4">
            <p className="font-sans font-bold text-lg text-yellow-500 brightness-90">Breweries</p>
            <hr className="my-3 h-0.25 border-yellow-500 mt-1 px-6" style={{ color: 'rgb(250 204 21)' }}></hr>
            <p className="font-sans font-normal text-neutral-300 text-xs max-w-lg">
                This application empowers users to efficiently explore and manage information about various companies. Interface showcasing a comprehensive list of companies, each row in the list provides information about the company. Search functionality enables users to easily find specific companies. Expanded details are available upon selecting a company. Row coloring to enhance readability and quickly distinguish between different companies.
            </p>
        </div>
        <div className="row-span-2 col-span-1">
            <p className="font-bold text-center text-purple-400 brightness-90 mt-1">Links</p>
            <hr className="mx-auto my-4 h-0.25 border-purple-400 mt-1 px-6 brightness-90 w-1/2" style={{ color: 'rgb(192 132 252)' }}></hr>
            <div className="flex flex-col items-center justify-center brightness-50 ease-in-out hover:brightness-150 mb-2">
                <Link href="https://ephemeral-custard-b47be4.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <IconPresentation className="w-6 h-6 object-cover text-yellow-200 mt-2 z-40 " />
                </Link>
                <p className="font-sans font-bold text-center text-yellow-200 text-xs">Website</p>
            </div>
            <div className="flex flex-col items-center justify-center brightness-50 ease-in-out hover:brightness-150 mb-2">
                <Link href="https://github.com/ericpastor/fs16_5-React-Breweries" rel="noopener noreferrer" target="_blank">
                    <IconCodeCircle2 className="w-6 h-6 object-cover text-logo-blue mt-2 z-40 " />
                </Link>
                <p className="font-sans font-bold text-center text-logo-blue text-xs">Frontend</p>
            </div>
        </div>
        <div className="col-span-4 mt-4">
            <p className="font-bold text-logo-blue-light brightness-90">Frontend Technologies</p>
            <hr className="my-3 h-0.25 border-logo-blue mt-1 px-6 brightness-90" style={{ color: '#4dc5ff' }}></hr>
            <p className="font-sans font-normal text-neutral-300 text-xs">
                JavaScript, TypeScript, React, React Router, Redux, Material UI.</p>
        </div>
    </div>
);
const SkeletonTen = () => (
    <div className="relative flex w-full h-full rounded-xl items-center justify-center overflow-hidden -mb-10">
        <video autoPlay loop muted className="w-full h-full object-cover brightness-50 ease-in-out hover:brightness-75">
            <source src='../../breweries.mp4' type="video/mp4" />
            Video not supported
        </video >
        <p className="absolute -top-12 left-0 right-0 bottom-0 flex items-center justify-center font-sans font-bold text-white text-2xl mb-3">
            Frontend Project
        </p>
        <p className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center font-sans font-bold text-white text-xl">
            Company search
        </p>
    </div >
);
const SkeletonEleven = () => (
    <div className="grid grid-cols-5 grid-rows-2 gap-1 -mb-20">
        <div className="col-span-4 mt-4">
            <p className="font-sans font-bold text-lg text-logo-blue brightness-90">About this Portfolio</p>
            <hr className="my-3 h-0.25 border-logo-blue mt-1 px-6" style={{ color: '#4dc5ff' }}></hr>
            <p className="font-sans font-normal text-neutral-300 text-xs max-w-lg">
                A single-page portfolio, crafted with Bento layout design. I used Nextjs and Tailwind to have my first experience with these two technologies.
            </p>
            <p className="font-sans font-normal text-neutral-300 text-xs mt-2 max-w-lg">
                Stuff to do: Think about light mode color contrast, refactor, and add more projects.
            </p>
            <p className="font-sans font-normal text-neutral-300 text-xs mt-2 max-w-lg">
                Feel free to go to the link to explore the code.
            </p>
        </div>
        <div className="row-span-2 col-span-1">
            <p className="font-bold text-center text-purple-400 brightness-90 mt-5">Links</p>
            <hr className="mx-auto my-4 h-0.25 border-purple-400 mt-1 px-6 brightness-90 w-1/2" style={{ color: 'rgb(192 132 252)' }}></hr>
            <div className="flex flex-col items-center justify-center brightness-50 ease-in-out hover:brightness-150 mb-2">
                <Link href="https://github.com/ericpastor/portfolio-bento" rel="noopener noreferrer" target="_blank">
                    <IconCodeCircle2 className="w-6 h-6 object-cover text-logo-blue mt-2 z-40 " />
                </Link>
                <p className="font-sans font-bold text-center text-logo-blue text-xs">Frontend</p>
            </div>
        </div>
        <div className="col-span-4 mt-4">
            <p className="font-bold text-logo-blue-light brightness-90">Frontend Technologies</p>
            <hr className="my-3 h-0.25 border-logo-blue mt-1 px-6 brightness-90" style={{ color: '#4dc5ff' }}></hr>
            <p className="font-sans font-normal text-neutral-300 text-xs">
                Nextjs, TypeScript, Tailwind, Aceternity UI.</p>
        </div>
    </div>
);
const SkeletonTwelve = () => (
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
        header: <SkeletonFive />,
    },

    {
        header: <SkeletonSix />,
    },
    {
        header: <SkeletonSeven />,
    },
    {
        header: <SkeletonEight />,
    },
    {
        header: <SkeletonNine />,
    },
    {
        header: <SkeletonTen />,
    },
    {
        header: <SkeletonEleven />,
    },
    {
        header: <SkeletonTwelve />,
    },
];

export default items;