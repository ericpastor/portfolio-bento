import { IconBrandAngular } from "@tabler/icons-react";

function NewTech() {
    return (
        <div className="flex w-full h-full rounded-xl items-center p-5 justify-center bg-white dark:bg-card-start">
            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 dark:pr-2 dark:pl-2  dark:bg-transparent">
                    <IconBrandAngular className="w-12 h-12 object-cover text-red-600 dark:mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-red-600 dark:font-bold dark:mt-2 text-xs">Angular</p>
            </div>
        </div>

    );
}

export default NewTech