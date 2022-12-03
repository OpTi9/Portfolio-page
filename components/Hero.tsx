import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {}

export default function Hero({}: Props) {

    const [ text, count ] = useTypewriter({
        words: [
            "Hello, I'm Aza",
            "React+TypeScript+TailwindCSS",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircle />
            {/*TODO: replace with next.js image component*/}
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover border-4 border-[#F7AB0A]"
                src="/images/avatar.png"
                alt="avatar"
            />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#ffb641"/>
            </h1>
        </div>
    )
}