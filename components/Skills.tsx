import React from 'react';
import { motion } from 'framer-motion';
import Skill from "./Skill";
import {Skill as SkillType} from "../typings";

type Props = {
    skills: SkillType[];
}

function Skills({skills}: Props) {

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-6 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold ml-3 sm:ml-0">
                Skills
            </h3>
            <h3 className="hidden sm:block absolute top-28 sm:top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill to see proficiency
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-5 px-5 mt-2">
                {skills?.map((skill) => (
                    <Skill key={skill?._id} skill={skill} />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills;