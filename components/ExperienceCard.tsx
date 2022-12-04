import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {

    return (
        <article>
            <img
                src="/images/lde.png"
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            />
        </article>
    )
}

export default ExperienceCard;