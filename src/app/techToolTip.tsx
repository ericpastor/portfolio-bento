"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: "/react.svg",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "/react.svg",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "/react.svg",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "/react.svg",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "/react.svg"
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "/react.svg",
    },
];

export function TechToolTip() {
    return (
        <div className="flex flex-row items-center justify-center place-self-center w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
