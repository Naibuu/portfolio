import { StyledFooter } from './styles'

/** Hooks */
import { useTranslation } from '~hooks/useTranslation'
import { useAppDispatch, useAppSelector } from '~hooks/useStore'
import { setLanguage } from '~store/metadata'

/** Components */
import Social from '~components/Shared/Social'
import { SocialProps } from '~components/Shared/Social/types'
import Socials from '~data/Socials'
import Tooltip from '~components/Shared/Tooltip'

export default function Footer() {
    const dispatch = useAppDispatch()
    const language = useAppSelector((state) => state.metadataSlice.language)
    const t = useTranslation()

    const toggleLanguage = () => {
        const current = language === 'en' ? 'gr' : 'en'
        dispatch(setLanguage(current))
        localStorage.setItem('language', current)
    }

    return (
        <StyledFooter>
            <div>
                <Tooltip content={t('language')} hideOnClick={false}>
                    <button onClick={() => toggleLanguage()}>
                        {language == 'en' ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 513 342"
                            >
                                <g fill="#FFF">
                                    <path d="M0 0h513v341.3H0V0z" />
                                    <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z" />
                                </g>
                                <g fill="#0052B4">
                                    <path d="M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zM118.2 111.3 0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zM421.7 111.3 513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z" />
                                </g>
                                <g fill="#D80027">
                                    <path d="M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z" />
                                    <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM143.7 230 0 309.9v31.5L200.3 230h-56.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6zM368.3 111.3 513 31.5V0L311.7 111.3h56.6z" />
                                </g>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 513 342"
                            >
                                <path fill="#FFF" d="M0 0h513v342H0z" />
                                <g fill="#0d5eaf">
                                    <path d="M0 0h513v38H0zM0 76h513v38H0zM0 152h513v38H0zM0 228h513v38H0zM0 304h513v38H0z" />
                                    <path d="M0 0h190v190H0z" />
                                </g>
                                <g fill="#FFF">
                                    <path d="M0 76h190v38H0z" />
                                    <path d="M76 0h38v190H76z" />
                                </g>
                            </svg>
                        )}
                    </button>
                </Tooltip>
                <p>
                    Copyright © {new Date().getFullYear()}. Naibuu.{' '}
                    {t('footer-rights-served')}
                </p>
            </div>
            <div>
                {Socials.map((props: SocialProps, index: number) => (
                    <Social key={index} icon={props.icon} href={props.href} />
                ))}
                <a href="https://github.com/Naibuu/portfolio">Source Code</a>
            </div>
        </StyledFooter>
    )
}
