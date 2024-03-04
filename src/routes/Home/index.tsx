import { PageWrapper, StyledLanding } from './styles'

/** Components */
import { Logo } from '~components/Shared/Logo'
import { Mail } from '~components/Shared/Mail'
import { Social } from '~components/Shared/Social'

import { SocialProps } from '~components/Shared/Social/types'
import { Socials } from '~data/Socials'

/** Animations */
import { Fade } from '~components/Animation/Fade'

export const HomePage = () => {
    return (
        <PageWrapper>
            <StyledLanding>
                <Fade>
                    <Logo />
                </Fade>
                <Fade transition={{ delay: 0.1 }}>
                    <p>
                        A hobby programmer and student from Greece who
                        specializes in frontend web development.
                    </p>
                </Fade>
                <Fade transition={{ delay: 0.2 }}>
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
                </Fade>
                
            </StyledLanding>
        </PageWrapper>
    )
}
