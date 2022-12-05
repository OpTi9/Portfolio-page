import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {

    return (
        <div className="group relative flex cursor-pointer">
            <motion.img className="rounded-full border border-gray-800 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 object-center object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1}}
                whileInView={{opacity: 1, x: 0}}
                src="/images/unity.png"
            />
            <div className="rounded-full absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-gray-900 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-white opacity-100">5/10</p>
                </div>
            </div>
        </div>
    )
}

export default Skill;