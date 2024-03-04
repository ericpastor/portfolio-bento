import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import items from "@/utils/data/items"

export function Portfolio() {

    return (
        <>
            <div className="m-10">
                <BentoGrid className="max-w-full mx-auto gap-1">
                    {items.map((item, i) => (
                        <>
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                iconBottomOne={item.iconBottomOne}
                                iconBottomTwo={item.iconBottomTwo}
                                iconBottomThree={item.iconBottomThree}
                                theme={item.theme}
                                className={i === 0 || i === 2 || i === 5 || i === 6 || i === 10 || i === 9 ? "md:col-span-2" : ""}
                            />
                        </>
                    ))}
                </BentoGrid>
            </div>
        </>
    );
}

