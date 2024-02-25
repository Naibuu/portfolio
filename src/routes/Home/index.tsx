import { PageWrapper, StyledLanding } from './styles'
import { motion } from 'framer-motion'

/** Hooks */
import { useTranslation} from '~hooks/useTranslation'

/** Components */
import Logo from '~components/Shared/Logo'
import Mail from '~components/Shared/Mail'
import Social from '~components/Shared/Social'

import { SocialProps } from '~components/Shared/Social/types'
import Socials from '~data/Socials'

export default function Home() {
    const t = useTranslation()

    return (
        <PageWrapper>
            <StyledLanding>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Logo />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    {t('landing-description')}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Mail to="contact@naibuu.dev" />
                    <div>
                        {Socials.map((props: SocialProps, index: number) => (
                            <Social
                                key={index}
                                icon={props.icon}
                                href={props.href}
                            />
                        ))}
                    </div>
                </motion.div>
            </StyledLanding>
        </PageWrapper>
    )
}
