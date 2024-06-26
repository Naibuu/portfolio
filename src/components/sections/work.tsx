import { useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'

import Bitmoji from '~/assets/bitmoji/throw.png'
import { Projects } from '~/data/projects'

export default function Work() {
    const [hovered, setHovered] = useState<number>(0)

    const isHovered = (i: number) => i === hovered

    return (
        <div className="flex flex-col gap-6">
            {/**
             * Bitmoji
             */}
            <div className="relative flex items-center gap-2 select-none max-sm:flex-col max-sm:text-center">
                <img src={Bitmoji} alt="Bitmoji" draggable={false} />

                <h2 className="text-transparent text-lg font-semibold bg-gradient-to-t from-blue-200 to-blue-100 bg-clip-text">
                    Here are some{' '}
                    <span className="text-transparent font-bold bg-gradient-to-t from-blue-500 to-blue-400 bg-clip-text">
                        projects
                    </span>{' '}
                    that I've worked on and some stuff that I've made.
                </h2>
            </div>

            {/**
             * Projects Map
             */}
            <div className="p-1 gap-3 columns-2 max-sm:columns-1">
                {Projects.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        onMouseEnter={() => setHovered(index)}
                        className={classNames(
                            isHovered(index)
                                ? 'blur-0'
                                : 'blur-[1px] max-sm:blur-0',
                            'relative p-4 flex flex-col gap-2 mb-3 transition cursor-pointer',
                        )}
                    >
                        <h2 className="text-neutral-200 text-lg font-semibold">
                            {item.title}
                        </h2>

                        <p className="text-neutral-300 leading-7 text-sm">
                            {item.description}
                        </p>

                        {isHovered(index) && (
                            <motion.div
                                layoutId="project"
                                className="max-sm:hidden absolute top-0 left-0 size-full bg-neutral-700/30 rounded-xl -z-10"
                                transition={{
                                    type: 'spring',
                                    bounce: 0.2,
                                    duration: 0.3,
                                }}
                            />
                        )}
                    </a>
                ))}
            </div>
        </div>
    )
}
