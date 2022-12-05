import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {

    return (
        <motion.div
            className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
                About
            </h3>
            <motion.img
                className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                src="/images/picture.jpg"
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
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a little bit <span className="underline decoration-[#F7AB0A]/50">about</span> me
                </h4>
                <p className="text-base text-justify">
                    I am a software engineer based in Strasbourg, France. I have a passion for building web applications on React using Typescript.
                    I have been working with web technologies for over 3 years now. I have worked on both frontend and backend.
                    I am currently doing my apprenticeship at <a href="https://www.lde.fr/" target="_blank" rel="noreferrer" className="text-[#ffb641] font-semibold">LDE France</a> where I work on lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nunc nunc vel nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nunc nunc vel nisl.
                </p>
            </div>
        </motion.div>
    )
}

export default About;