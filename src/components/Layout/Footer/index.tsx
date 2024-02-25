import { StyledFooter } from './styles'

/** Hooks */
import { useTranslation } from '~hooks/useTranslation'
import { useAppDispatch, useAppSelector } from '~hooks/useStore'
import { setLanguage } from '~store/metadata'

/** Components */
import Social from '~components/Shared/Social'
import { SocialProps } from '~components/Shared/Social/types'
import Socials from '~data/Socials'

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
                <button onClick={() => toggleLanguage()}>
                    {language == 'en' ? (
                        <img draggable={false} src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg" />
                    ) : (
                        <img draggable={false} src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GR.svg" />
                    )}
                </button>
                <p>
                    Copyright © {new Date().getFullYear()}. Naibuu. {t('footer-rights-served')}
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
