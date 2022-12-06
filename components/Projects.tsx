import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
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

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {projects.map((project,index) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            src="/images/lde.png"
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1 }}
                            whileInView={{opacity: 1, y: 0 }}
                            viewport={{once: true}}
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="">
                                    Case Study <span className="text-[#F7AB0A]/80 font-bold">{index+1} </span> of {projects.length}:
                                </span>
                                {" "}Nft project
                            </h4>
                            <p className="text-justify text-lg text-center md:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam,
                                nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec aliquam aliquam,
                                nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl
                                sit amet nisl. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.
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