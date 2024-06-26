import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

type Social = {
    icon: IconProp
    text: string
    url?: string
}

export const Socials: Social[] = [
    {
        icon: faEnvelope,
        text: 'me@naibuu.dev',
    },
    {
        icon: faGithub,
        text: 'naibuu',
        url: 'https://github.com/naibuu',
    },
    {
        icon: faDiscord,
        text: 'hs50',
    },
]
