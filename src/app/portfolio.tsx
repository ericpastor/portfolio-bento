import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import items from "@/utils/data/items"

export function Portfolio() {

    return (
        <>
            <div className="m-8">
                <BentoGrid className="max-w-full mx-auto gap-8">
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
                                className={i === 0 || i === 3 || i === 4 || i === 7 || i === 10 || i === 8 ? "md:col-span-2" : ""}
                            />
                        </>
                    ))}
                </BentoGrid>
            </div>
        </>
    );
}

