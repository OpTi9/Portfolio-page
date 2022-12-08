import React from 'react';
import { motion } from 'framer-motion';
import {PageInfo} from "../typings";
import {urlFor} from "../sanity";

type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {

    return (
        <motion.div
            className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
            initial={{
                opacity: 1,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
        >
            <h3 className="absolute top-10 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
                About
            </h3>
            <motion.img
                draggable={false}
                className="mb-8 sm:mb-0 mt-5 w-64 h-64 md:mt-10 md:mb-10 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
                src={urlFor(pageInfo?.profileImage).url()}
                initial={{
                    x:-200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
            }}
                viewport={{ once: true}}
                transition={{
                    duration: 1.2,
                }}
            />
            <div className="space-y-5 px-0 md:px-10">
                <h4 className="text-2xl sm:text-4xl font-semibold">
                    Here is a little bit <span className="underline decoration-[#F7AB0A]/50">about</span> me
                </h4>
                <p className="text-base text-justify">
                    {pageInfo?.backgroundInfo}
                </p>
            </div>
        </motion.div>
    )
}

export default About;