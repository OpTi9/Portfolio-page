import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from "./ExperienceCard";
import {Experience} from "../typings";

type Props = {
    experiences: Experience[];
}

function WorkExperience({experiences}: Props) {

    return (
        <motion.div
            className="overflow-x-hidden h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
        >
            <h3 className="absolute top-8 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold overflow-x-hidden">
                Experience
            </h3>
            <div className="mt-4 sm:mt-0 w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 scrollbar-thin">
                {experiences.map((experience) => (
                    <ExperienceCard key={experience?._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    )
}

export default WorkExperience;