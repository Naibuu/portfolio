import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Bitmoji from '~/assets/bitmoji/chill.png'

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const parallaxY = useTransform(scrollYProgress, (y) => y * 5)

    const imageBlur = useTransform(
        scrollYProgress,
        [0.5, 0],
        ['blur(5px)', 'blur(0px)'],
    )

    const textBlur = useTransform(
        scrollYProgress,
        [0.5, 0],
        ['blur(0px)', 'blur(1px)'],
    )

    return (
        <section ref={ref} className="flex flex-col items-center">
            <div className="max-w-[32em] flex flex-col justify-center items-center">
                {/**
                 * Bitmoji
                 */}

                <motion.div style={{ y: parallaxY, filter: imageBlur }}>
                    <div className="relative bg-gradient-to-b from-black/0 via-black/75 to-black">
                        <p className="absolute top-0 translate-y-24 -translate-x-8 -rotate-6 font-cursive text-neutral-100 text-lg max-sm:-translate-x-2 max-sm:translate-y-16">
                            Yes, this is me all day..
                        </p>

                        <img
                            src={Bitmoji}
                            className="relative -z-10 select-none"
                            width={300}
                            height={300}
                            draggable={false}
                        />
                    </div>
                </motion.div>

                {/**
                 * Hero Text
                 */}

                <h1 className="-translate-y-12 text-transparent text-3xl text-center font-semibold bg-gradient-to-t from-amber-100 to-amber-50 bg-clip-text max-sm:text-xl">
                    A{' '}
                    <span className="text-transparent font-bold bg-gradient-to-t from-amber-500 to-amber-300 bg-clip-text">
                        self-taught
                    </span>{' '}
                    programmer and graphic designer
                </h1>

                {/**
                 * Hero description
                 */}

                <motion.div
                    style={{ y: parallaxY, filter: textBlur }}
                    className="flex flex-col gap-6 max-sm:text-sm"
                >
                    <p className="text-neutral-300 leading-8 text-center font-medium">
                        "Hey! My name is Alex. I'm a self-taught programmer from
                        Greece, specializing in frontend development.
                        Programming is a big passion for me, and I have been
                        programming for many years now."
                    </p>

                    <p className="text-neutral-300 leading-8 text-center font-medium">
                        "The first lines of code I ever wrote were for a simple
                        Discord bot using Python in 2018. This led to making
                        Minecraft mods and clients during 2020 for fun with my
                        friends, which really helped me understand how code
                        works."
                    </p>

                    <p className="text-neutral-300 leading-8 text-center font-medium">
                        "I started making websites in 2021 and haven't stopped
                        working on creating new websites and notable experiences
                        for others since. The first website I created consisted
                        only of simple JavaScript and social links. Then I moved
                        on to trying web frameworks such as Vue, React, Svelte,
                        and more."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
