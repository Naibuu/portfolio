import { useState } from 'react'
import { PageWrapper, StyledCarousel, StyledWork } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleArrowLeft,
    faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons'

/** Animations */
import { Fade } from '~components/Animation/Fade'

export const WorkPage = () => {
    const [carouselIndex, setCarouselIndex] = useState(0)

    const handleNext = () => {
        setCarouselIndex((prevIndex) =>
            prevIndex === Images.length - 1 ? 0 : prevIndex + 1,
        )
    }

    const handlePrev = () => {
        setCarouselIndex((prevIndex) =>
            prevIndex === 0 ? Images.length - 1 : prevIndex - 1,
        )
    }

    const Images = [
        {
            id: 1,
            alt: 'Hybris',
        },
        {
            id: 2,
            alt: 'Skinbook',
        },
        {
            id: 3,
            alt: 'Vtube center',
        },
    ]

    return (
        <PageWrapper>
            <StyledWork>
                <Fade>
                    <h1>Work</h1>
                </Fade>
                <Fade transition={{ delay: 0.1 }}>
                    <p>
                        My first ever work consisted of graphic designs I made
                        for people and projects that are now unfortunately
                        discontinued, and I cannot retrieve them. Later on, I
                        delved into programming, where I developed a new hobby:
                        creating simple websites and improving over time. My
                        most notable projects have been Minecraft related.
                    </p>
                </Fade>
                <Fade transition={{ delay: 0.2 }}>
                    <StyledCarousel>
                        <button onClick={handlePrev}>
                            <FontAwesomeIcon icon={faCircleArrowLeft} />
                        </button>
                        {Images.map(
                            (
                                props: { id: number; alt: string },
                                index: number,
                            ) => (
                                <img
                                    key={index}
                                    className={
                                        carouselIndex != index
                                            ? 'translucent'
                                            : ''
                                    }
                                    src={`/assets/images/${props.id}.webp`}
                                    alt={props.alt}
                                    style={{
                                        transform: `translateX(${-(carouselIndex * 100)}%)`,
                                    }}
                                    onClick={() =>
                                        carouselIndex != index &&
                                        setCarouselIndex(index)
                                    }
                                />
                            ),
                        )}
                        <button onClick={handleNext}>
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </button>
                    </StyledCarousel>
                </Fade>
            </StyledWork>
        </PageWrapper>
    )
}
