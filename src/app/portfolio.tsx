import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import items from "@/utils/data/items"

export function Portfolio() {

    return (
        <>
            <BentoGrid className="max-w-4xl mx-auto">
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
                            className={i === 0 || i === 3 || i === 7 ? "md:col-span-2" : ""}
                        />
                    </>
                ))}
            </BentoGrid>
        </>
    );
}

