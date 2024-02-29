import { IconBrandCss3, IconBrandCypress, IconBrandGraphql, IconBrandRedux, IconBrandTailwind, IconShoppingCartQuestion, IconSql } from "@tabler/icons-react";
import { IconBrandHtml5 } from "@tabler/icons-react";
import { IconBrandMongodb } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";
import { IconBrandTypescript } from "@tabler/icons-react";
import { IconBrandSass } from "@tabler/icons-react";
import { IconBrandNodejs } from "@tabler/icons-react";
import { IconBrandJavascript, IconBrandReact } from "@tabler/icons-react";

function Technologies() {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="flex flex-col items-center justify-center">
                <IconBrandReact className="w-6 h-6 object-cover text-logo-blue mt-2 z-40" />
                <p className="font-sans font-bold text-center text-logo-blue text-xs">React</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandJavascript className="w-6 h-6 object-cover text-yellow-200 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-yellow-200 text-xs">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandNodejs className="w-6 h-6 object-cover text-green-500 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-green-500 text-xs">Nodejs</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandCss3 className="w-6 h-6 object-cover text-blue-500  mt-2 z-40" />
                <p className="font-sans font-bold text-center text-blue-500  text-xs">Css</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandSass className="w-6 h-6 object-cover text-rose-500 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-rose-500 text-xs">Sass</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandHtml5 className="w-6 h-6 object-cover text-orange-500 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-orange-500 text-xs">HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandTypescript className="w-6 h-6 object-cover text-blue-400 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-blue-400 text-xs">TypeScript</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandRedux className="w-6 h-6 object-cover text-purple-400 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-purple-400 text-xs">Redux</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandMongodb className="w-6 h-6 object-cover text-green-400 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-green-400 text-xs">MongoDB</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandCSharp className="w-6 h-6 object-cover text-purple-400 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-purple-400 text-xs">CSharp</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandCypress className="w-6 h-6 object-cover text-green-400 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-green-400 text-xs">Cypress</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandGraphql className="w-6 h-6 object-cover text-rose-400 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-rose-400 text-xs">Cypress</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconBrandTailwind className="w-6 h-6 object-cover text-blue-400 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-blue-400 text-xs">Cypress</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <IconSql className="w-6 h-6 object-cover text-blue-200 mt-2 z-40" />
                <p className="font-sans font-bold text-center text-blue-200 text-xs">sql</p>
            </div>

        </div>
    );
}

export default Technologies