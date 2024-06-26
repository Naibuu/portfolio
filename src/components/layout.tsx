import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="max-w-[36em] py-24 px-2 mx-auto flex flex-col gap-12">
            {children}
        </div>
    )
}
