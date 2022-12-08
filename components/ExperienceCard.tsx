import React from 'react';
import { motion } from 'framer-motion';
import {Experience} from "../typings";
import {urlFor} from "../sanity";
import {Tooltip} from "@mui/material";
//import Image from "next/image";

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {

    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[500px] xl:w-[600px]
        snap-center bg-gray-900 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-x-hidden">
            <motion.img
                draggable={false}
                src={urlFor(experience?.companyImage).url()}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
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
                <h4 className="text-4xl font-light">
                    {experience?.jobTitle}
                </h4>
                <p className="font-bold text-2xl mt-1">
                    {experience?.company}
                </p>
                <div className="flex space-x-3 my-2 bg-[#0B0F19]/30 rounded-full justify-center">
                    {experience?.technologies.map((technology) => (
                        <Tooltip key={technology._id} title={technology.title}>
                            <img draggable={false} key={technology._id} src={urlFor(technology.image).url()} className="w-10 h-10 rounded-full object-scale-down"  alt={technology.title}/>
                        </Tooltip>
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrent ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard;