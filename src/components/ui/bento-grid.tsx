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
                " relative row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-200 shadow-input dark:hover:shadow-in-dark transition duration-200 shadow-input p-0 dark:bg-card-start bg-white tjustify-between flex flex-col -space-y-4 m-4 dark:border border-logo-blue",
                className
            )}
        >
            {header}
            <div className="relative group-hover/bento:translate-x-2 transition duration-200">

                <div className="text-center font-sans font-bold text-2xl text-neutral-600 dark:text-neutral-200 mb-2 -mt-4">
                    {title}
                </div>
                <div className="flex flex-wrap justify-center gap-2 font-sans font-normal text-center text-neutral-600 text-xs dark:text-neutral-300 mb-4">
                    {description}
                    <div style={{ width: '2.25vw', height: 'auto' }}>
                        {icon}
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-4 mb-1 text-center" style={{ fontSize: '2vw' }}>
                    {iconBottomOne} {iconBottomTwo} {iconBottomThree} {theme}
                </div>
                {/* <div className="absolute bottom-12 right-24">
                    {iconBottomOne}
                </div>
                <div className="absolute bottom-12 right-16">
                    {iconBottomTwo}
                </div>
                <div className="absolute bottom-12 right-8">
                    {iconBottomThree}
                </div>
                <div className="absolute bottom-12 right-0">
                    {theme}
                </div>  */}
            </div>
        </div>
    );
};
