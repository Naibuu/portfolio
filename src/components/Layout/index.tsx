import { type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { AnimatePresence, motion } from 'framer-motion'

/** Components */
import Lightbar from './Lightbar'
import Footer from './Footer'

const StyledLayout = styled('div')`
    display: flex;
    flex-direction: column;
`

/**
 * @param $e - Extend the margin of the page.
 */
const Content = styled('main')<{ $e: boolean }>`
    height: fit-content;
    width: 100%;
    max-width: 1000px;
    margin: ${(props) => props.$e ? '110px auto 0 auto' : '0 auto'};

    display: flex;
    flex-direction: column;
`

const ReturnButton = styled(motion.button)`
    position: absolute;
    top: 50px;
    z-index: 9;

    width: fit-content;

    display: flex;
    align-items: center;
    gap: 8px;

    color: white;
    font-size: 16px;

    background: none;
    border: none;

    transition: gap 0.2s ease;
    cursor: pointer;

    &:hover {
        gap: 12px;
    }

    b {
        font-weight: 600;
    }
`

export default function Layout({ children }: { children: ReactNode }) {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <StyledLayout>
            <Lightbar />
            <Content $e={location.pathname !== '/'}>
                <AnimatePresence mode="wait">
                    {location.pathname !== '/' && (
                        <ReturnButton
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                type: 'spring',
                                bounce: 0,
                                duration: 0.5,
                            }}
                            onClick={() => navigate('/')}
                        >
                            ← <b>Return back</b>
                        </ReturnButton>
                    )}
                </AnimatePresence>
                {children}
                <Footer />
            </Content>
        </StyledLayout>
    )
}
