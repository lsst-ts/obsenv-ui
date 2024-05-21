"use client"

import { useState } from "react";
import clsx from "clsx";
import { PackageInfo } from "@/app/lib/definitions";

const BoxCard = ({ name, current_version, original_version, is_different }: PackageInfo) => {
    const [isAuthed, setAuthed] = useState(false);

    const onClick = () => {
        console.log("Edit button clicked");
    }

    return (
        <div className="max-w-sm h-350 rounded overflow-hidden shadow-md shadow-gray-400 bg-gray-900 m-2">
            <div className="font-bold text-m text-center item-center py-3">{name}</div>
            <div className="grid grid-cols-3 m-2">
                <div className="text-m text-center col-span-1">Current:</div>
                <div className="text-m px-2 col-span-2">{current_version}</div>
                <div className="text-m text-center col-span-1">Original:</div>
                <div className="text-m px-2 col-span-2">{original_version}</div>
            </div>
            <div className="grid grid-cols-6 mb-4 mx-4">
                <div className="col-end-7 col-span-1">
                    <button aria-disabled={!isAuthed} onClick={onClick} className={clsx("rounded", "shadow-md", "shadow-gray-400", "bg-gray-800", "p-3", { "hover:bg-gray-600": isAuthed, "active:bg-gray-700": isAuthed, "focus:outline-none": isAuthed, "focus:ring": isAuthed, "focus:ring-gray-300": isAuthed, "fg-gray-200": !isAuthed, "text-gray-700": !isAuthed })}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default BoxCard;
