import { IconBrandCss3, IconBrandCypress, IconBrandGraphql, IconBrandRedux, IconBrandTailwind, IconSql } from "@tabler/icons-react";
import { IconBrandHtml5 } from "@tabler/icons-react";
import { IconBrandMongodb } from "@tabler/icons-react";
import { IconBrandCSharp } from "@tabler/icons-react";
import { IconBrandTypescript } from "@tabler/icons-react";
import { IconBrandSass } from "@tabler/icons-react";
import { IconBrandNodejs } from "@tabler/icons-react";
import { IconBrandJavascript, IconBrandReact } from "@tabler/icons-react";

function Technologies() {
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-4 w-10/12 h-36 scroll-box mb-2 -mt-6 dark:mt-0">
            <div>
                <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandReact className="w-6 h-6 object-cover text-logo-blue mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-logo-blue dark:font-bold mt-2 text-xs">React</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-500 rounded-lg pb-2 pr-0 pl-0 ml-1 mr-1 dark:bg-transparent">
                    <IconBrandJavascript className="w-6 h-6 object-cover text-yellow-200 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-yellow-200 dark:font-bold mt-2 text-xs">JavaScript</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandNodejs className="w-6 h-6 object-cover text-green-500 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-green-500 dark:font-bold mt-2 text-xs">Nodejs</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandCss3 className="w-6 h-6 object-cover text-blue-500 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-blue-500 dark:font-bold mt-2 text-xs">Css</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandSass className="w-6 h-6 object-cover text-rose-500 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-rose-500 dark:font-bold mt-2 text-xs">Sass</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandHtml5 className="w-6 h-6 object-cover text-orange-500 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-orange-500 dark:font-bold mt-2 text-xs">HTML</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 ml-1 mr-1 dark:bg-transparent">
                    <IconBrandTypescript className="w-6 h-6 object-cover text-blue-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-blue-400 dark:font-bold mt-2 text-xs">TypeScript</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandRedux className="w-6 h-6 object-cover text-purple-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-purple-400 dark:font-bold mt-2 text-xs">Redux</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 ml-2 mr-2 dark:bg-transparent">
                    <IconBrandMongodb className="w-6 h-6 object-cover text-green-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-green-400 dark:font-bold mt-2 text-xs">MongoDB</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandCSharp className="w-6 h-6 object-cover text-purple-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-purple-400 dark:font-bold mt-2 text-xs">CSharp</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandCypress className="w-6 h-6 object-cover text-green-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-green-400 dark:font-bold mt-2 text-xs">Cypress</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandGraphql className="w-6 h-6 object-cover text-rose-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-rose-400 dark:font-bold mt-2 text-xs">Graphql</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconBrandTailwind className="w-6 h-6 object-cover text-blue-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-blue-400 dark:font-bold mt-2 text-xs">Tailwind</p>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg pb-2 pr-2 pl-2 dark:bg-transparent">
                    <IconSql className="w-6 h-6 object-cover text-blue-400 mt-2 z-40" />
                </div>
                <p className="font-sans text-center text-neutral-600 dark:text-blue-200 dark:font-bold mt-2 text-xs">                <p className="font-sans text-center text-neutral-600 dark:text-blue-200 dark:font-bold mt-2 text-xs">sql</p></p>
            </div>
        </div>
    );
}

export default Technologies