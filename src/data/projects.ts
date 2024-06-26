export type Project = {
    title: string
    description: string
    tags: string[]
    url?: string
}

export const Projects: Project[] = [
    {
        title: 'SkinBook (Surge)',
        description:
            'A platform for discovering skins, servers, capes, and more. (Surge: A launcher for launching modpacks and much more.)',
        tags: ['Minecraft', 'React', 'Typescript', 'Express', 'Node'],
        url: 'https://skinbook.net',
    },
    {
        title: 'Workspace',
        description:
            'A typical notes app built with desktop users in mind. It provides a variety of productivity features such as tagging, sorting, filtering, and much more.',
        tags: ['Electron', 'React', 'Typescript'],
        url: 'https://github.com/naibuu/workspace',
    },
    {
        title: 'VTube Center',
        description:
            'A website for discovering VTubers with different categories.',
        tags: ['React', 'NextJs', 'Typescript'],
        url: 'https://github.com/136masternr/vtubecenter',
    },
    {
        title: 'CheatBreaker',
        description: 'A modpack and FPS booster combined.',
        tags: ['Minecraft', 'Vue', 'Typescript'],
        url: 'https://cheatbreaker.net',
    },
    {
        title: 'Greek Plate Resolver',
        description:
            'A simple website that allows users to resolve Greek license plate prefixes to their registered locations.',
        tags: ['Minecraft', 'Vue', 'Typescript'],
        url: 'https://resolver.naibuu.dev',
    },
    {
        title: 'Express Starter',
        description:
            'A clean starter setup for express, ideal for quickly setting up backend systems and more.',
        tags: ['Typescript', 'Express'],
        url: 'https://github.com/naibuu/express-starter',
    },
    {
        title: 'Hybris',
        description: 'A universal modding framework and modpack for Minecraft.',
        tags: ['Minecraft', 'Typescript', 'React', 'NextJs'],
        url: 'https://github.com/hybrismc',
    },
    {
        title: 'Equicord',
        description: 'Another fork of Vencord',
        tags: ['Discord', 'Typescript', 'React'],
        url: 'https://github.com/equicord',
    },
]
