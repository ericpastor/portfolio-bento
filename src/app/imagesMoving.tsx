"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import imgs from "@/utils/data/imgs";

export function ImagesMoving() {
    return (
        <InfiniteMovingCards
            items={imgs}
            direction="left"
            speed="slow"
        />
    );
}

