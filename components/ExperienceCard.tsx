import React from 'react';
import { motion } from 'framer-motion';
import {Experience} from "../typings";
import {urlFor} from "../sanity";
import {Tooltip} from "@mui/material";
//import Image from "next/image";

type Props = {
    experience: Experience;
    index: number;
    total: number;
}

function ExperienceCard({experience, index, total}: Props) {

    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[500px] xl:w-[600px]
        snap-center bg-gray-900 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-x-hidden">
            <motion.img
                draggable={false}
                src={urlFor(experience?.companyImage).url()}
                className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                initial={{
                    y: -100,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
            />
            <div className="px-0 md:px-10">
                <h4 className="text-2xl sm:text-4xl font-light text-left">
                    {experience?.jobTitle}
                </h4>
                <p className="font-bold text-xl sm:text-2xl mt-1 text-left">
                    {experience?.company}
                </p>
                <div className="px-1 flex space-x-3 my-2 bg-[#0B0F19]/30 rounded-full justify-center">
                    {experience?.technologies.map((technology, index) => (
                        <Tooltip key={technology._id} title={technology.title}>
                            <img draggable={false} key={technology._id} src={urlFor(technology.image).url()} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-scale-down"  alt={technology.title}/>
                        </Tooltip>
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300 text-xs sm:text-base text-left">
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrent ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className="list-disc space-y-4 ml-5 text-md sm:text-xl pb-2">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
            <p className="font-bold"><span className="text-[#F7AB0A]/80 font-bold">{index+1} </span> / {total}</p>
        </article>
    )
}

export default ExperienceCard;