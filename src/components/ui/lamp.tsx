"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

import { ImagesMoving } from "@/app/imagesMoving";

export function Lamp() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.2, y: 15 }}
                whileInView={{ opacity: 1, y: -15 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-6 bg-gradient-to-br from-slate-300 to-slate-500 py-6 bg-clip-text text-center text-xl font-medium tracking-tight text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] dark:text-logo-blue dark:text-logo-blue-light md:text-xl"
            >
                Technology Learning Path
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex min-h-[16rem] flex-col items-center justify-center overflow-hidden bg-blue-100 dark:bg-gray-200 dark:bg-neutral-900 w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-10 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.2, width: "5rem" }}
                    whileInView={{ opacity: 1, width: "10rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/4 h-23 overflow-visible w-[15rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-blue-100 dark:bg-neutral-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-blue-100 dark:bg-neutral-900  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.2, width: "5rem" }}
                    whileInView={{ opacity: 1, width: "5rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/4 h-23 w-[15rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[30%] right-0 bg-blue-100 dark:bg-neutral-900  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[30%] right-0 bg-blue-100 dark:bg-neutral-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-24 w-full translate-y-12 scale-x-150 bg-blue-200 dark:bg-neutral-900 blur-2xl"></div>
                <div className="absolute top-1/2 z-10 h-24 w-full bg-transparent backdrop-blur-md"> <ImagesMoving /></div>
                <div className="absolute inset-auto z-50 h-18 w-[18rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "15rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[7rem] rounded-full bg-yellow-200 dark:bg-logo-blue blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "20rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[15rem] -translate-y-[4.75rem] bg-white dark:bg-logo-blue "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[10.25rem] bg-blue-100 dark:bg-neutral-900 "></div>
            </div>

            <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};
