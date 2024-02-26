"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import content from "@/utils/data/content"

export function CertificatesScroll() {
    return (
        <div className="p-0">
            <StickyScroll content={content} />
        </div>
    );
}
