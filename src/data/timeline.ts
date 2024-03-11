import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import {
    faEye,
    faGamepad,
    faRocket,
    faSearch,
    faTruckFast,
} from '@fortawesome/free-solid-svg-icons'

export const TimelineData: { icon: IconProp; text: string }[] = [
    {
        icon: faRocket,
        text: 'Joined GitHub on March 29th, 2021 and created my first ever project.',
    },
    {
        icon: faFigma,
        text: 'Started to learn more about UI/UX and the flows of web designing on January 24th, 2022.',
    },
    {
        icon: faEye,
        text: 'Published my first ever public website/portfolio in July 16th, 2022.',
    },
    {
        icon: faSearch,
        text: 'Started doing researches and learning to reverse engineer code on September 13th, 2022.',
    },
    {
        icon: faTruckFast,
        text: 'Watched my first ever project I contributed to getting shipped in 2022 - 2023.',
    },
    {
        icon: faGamepad,
        text: 'Started working on a Minecraft client for the first ever time in 2023.',
    },
]
