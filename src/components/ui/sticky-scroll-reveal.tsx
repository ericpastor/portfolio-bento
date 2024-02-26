"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";


export const StickyScroll = ({
    content,
}: {
    content: {
        title: string;
        subtitle: string;
        description: string;
    }[];
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        cardsBreakpoints.forEach((breakpoint, index) => {
            if (latest > breakpoint - 0.1 && latest <= breakpoint) {
                setActiveCard(() => index);
                console.log(index)
            }
        });
    });

    const linearGradients = [
        "center / contain no-repeat url('/integrify-certificate.png')",
        "center / contain no-repeat url('/certificate-full-stack-fso.png')",
        "center / contain no-repeat url('/certificate-graphql-fso.png')",
        "center / contain no-repeat url('/certificate-typescript-fso.png')",
        "center / contain no-repeat url('/certificate-react-native-fso.png')",
        "center / contain no-repeat url('/certificate-ci-cd-fso.png')",
        "center / contain no-repeat url('/certificate-containers-fso.png')",
        "center / contain no-repeat url('/certificate-relational-databases-fso.png')",
        "center / contain no-repeat url('/certificate-javascript-udemy.png')",
    ];

    return (
        <motion.div
            className="relative h-[15rem] overflow-y-auto flex justify-center relative space-x-2 rounded-md p-2"
            ref={ref}
        >
            <div className="div relative flex items-start px-0">
                <div className="w-full">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index || index + 1 ? 1 : 0.3,
                                }}
                                className="font-sans font-bold text-neutral-600 dark:text-white mb-1 -mt-12"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index || index + 1 ? 1 : 0.3,
                                }}
                                className="font-sans font-bold text-neutral-600 text-xs dark:text-white max-w-sm"
                            >
                                {item.subtitle}
                            </motion.p>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index || index + 1 ? 1 : 0.3,
                                }}
                                className="font-sans font-normal text-neutral-600 text-xs dark:text-white max-w-sm mb-4"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-20" />
                </div>
            </div>
            <motion.div
                animate={{
                    background: linearGradients[activeCard % linearGradients.length],
                }}
                className={`hidden lg:block h-30 w-80 rounded-md bg-white sticky top-2 overflow-hidden`}
            ></motion.div>
        </motion.div>
    );
};
