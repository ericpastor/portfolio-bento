import { cn } from "@/utils/cn";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    iconBottomOne,
    iconBottomTwo,
    iconBottomThree,
    theme,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    iconBottomOne?: React.ReactNode;
    iconBottomTwo?: React.ReactNode;
    iconBottomThree?: React.ReactNode;
    theme?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gray-100 border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="relative group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
                <div className="absolute bottom-0 right-24">
                    {iconBottomOne}
                </div>
                <div className="absolute bottom-0 right-16">
                    {iconBottomTwo}
                </div>
                <div className="absolute bottom-0 right-8">
                    {iconBottomThree}
                </div>
                <div className="absolute bottom-0 right-0">
                    {theme}
                </div>
            </div>
        </div>
    );
};