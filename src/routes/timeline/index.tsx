import { PageWrapper } from '~components/pageWrapper'
import { StyledTimeline, Container, Icon, Timeline } from './styles'

import { Fade } from '~components/animation/fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

import { TimelineData } from '~data/timeline'

export const TimelinePage = () => {
    return (
        <PageWrapper>
            <StyledTimeline>
                <h1>Timeline</h1>
                <p>Learn about the events of my journey as a developer.</p>
                <Timeline>
                    {TimelineData.map(
                        (
                            props: { icon: IconProp; text: string },
                            index: number,
                        ) => (
                            <Fade
                                key={index}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Container>
                                    <Icon>
                                        <FontAwesomeIcon icon={props.icon} />
                                    </Icon>
                                    {props.text}
                                </Container>
                            </Fade>
                        ),
                    )}
                    <Container className="translucent">
                        and the timeline continues on..
                    </Container>
                </Timeline>
            </StyledTimeline>
        </PageWrapper>
    )
}
