import React from 'react';
import { motion } from 'framer-motion';
import {urlFor} from "../sanity";
import {Project} from "../typings";
import Image from "next/image";
import Link from "next/link";

type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {
    console.log(projects);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{opacity: 1 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60">
                {projects.map((project,index) => (
                    <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <h3 className="mt-1 uppercase tracking-[3px] text-gray-500 text-sm text-center">
                            Click on an image to access
                        </h3>
                        <Link
                            href={project?.linkToProject ?? "#"}
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <motion.img
                                src={urlFor(project?.image).url()}
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1 }}
                                whileInView={{opacity: 1, y: 0 }}
                                viewport={{once: true}}
                                draggable={false}
                                className="md:max-h-[400px]"
                            />
                        </Link>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-1xl sm:text-4xl font-bold sm:font-semibold text-center">
                                <span className="">
                                    Case Study <span className="text-[#F7AB0A]/80 font-bold">{index+1} </span> of {projects.length}:
                                </span>
                                {" "}{project?.title}
                            </h4>

                            <div className="hidden sm:flex items-center space-x-2 justify-center">
                                {(project?.technologies ?? []).map((technology) => (
                                    <img
                                        className="h-7 w-7"
                                        draggable={false}
                                        alt=""
                                        key={technology._id}
                                        src={urlFor(technology?.image).url()}
                                    />
                                ))}
                            </div>

                            <p className="text-justify text-base sm:text-lg text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[150px]"/>
        </motion.div>
    )
}

export default Projects;