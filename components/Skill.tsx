import React from 'react';
import { Skill } from "../typings";
import {urlFor} from "../sanity";

type Props = {
    skill: Skill;
}

function Skill({ skill }: Props) {

    return (
        <div className="group relative flex cursor-pointer">
            <img className="object-scale-down rounded-full border border-gray-800 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 object-center filter group-hover:grayscale transition duration-300 ease-in-out"
                src={urlFor(skill?.image).url()}
                draggable={false}
            />
            <div className="rounded-full absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-gray-900 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-m text-center items-center font-bold text-white opacity-100">
                        {skill?.title}
                    </p>
                    <p className="text-3xl font-bold text-white opacity-100">
                        {skill?.progress}/10
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skill;