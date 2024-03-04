"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import content from "@/utils/data/content"

export function CertificatesScroll() {
    return (
        <div className="p-0 bg-white dark:bg-card-start">
            <StickyScroll content={content} />
        </div>
    );
}
