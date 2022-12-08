import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import {Social} from "../typings";

type Props = {
    socials: Social[];
}

export default function Header({socials}: Props) {
    return (
        <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                className="hidden sm:block flex flex-row items-center"
                initial={{ opacity: 0, x: -500, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {/* socials */}
                {socials.map((social) => (
                    <SocialIcon
                        style={{ height: 30, width: 30, marginRight: 5, }}
                        key={social._id}
                        url={social.url}
                        target={"_blank"}
                        rel="noopener noreferrer"
                        fgColor='transparent'
                        bgColor='gray'
                        draggable={false}
                    />
                ))}
            </motion.div>

            <Link href="#contact">
                <motion.div
                    className='hidden sm:block flex flex-row items-center text-gray-300 cursor-pointer hover:text-[#F7AB0A]'
                    initial={{ opacity: 0, x: 500, scale: 0.5 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <EnvelopeIcon className="h-6 w-6 mr-1" />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-[#F7AB0A]'>
                        Get in Touch
                    </p>
                </motion.div>
            </Link>
        </div>
    )
}