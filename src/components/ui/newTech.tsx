import { IconBrandAngular } from "@tabler/icons-react";

function NewTech() {
    return (
        <div className="flex w-full h-full rounded-xl items-center justify-center bg-card-start">
            <div className="flex flex-col items-center justify-center mt-2">
                <div className="flex flex-col items-center justify-center">
                    <IconBrandAngular className="w-20 h-20 object-cover text-red-500 mt-10 z-40" />
                    <p className="font-sans font-bold text-xl text-center text-white text-xl -mb-2">Angular</p>
                </div>
            </div>
        </div>

    );
}

export default NewTech