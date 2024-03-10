import { useEffect, useRef } from 'react'
import { StyledLightbar } from './styles'

interface Particle {
    x: number
    y: number
    opacity: number
    velocity: number
}

export const Lightbar = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!ctx) return

        const particles: Particle[] = []
        const width = 1000
        const height = 300

        const spawnParticle = () => ({
            x: Math.random() * width,
            y: Math.random() * 100,
            velocity: Math.random() * 0.2,
            opacity: Math.random() * 0.5 + 0.5,
        })

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            particles.forEach((particle, index) => {
                particle.y += particle.velocity
                particle.opacity -= 0.008

                if (particle.opacity > 0) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
                    ctx.beginPath()
                    ctx.arc(particle.x, particle.y, 0.4, 0, Math.PI * 2)
                    ctx.fill()
                } else {
                    particles.splice(index, 1)
                }
            })

            requestAnimationFrame(animate)
        }

        const spawnInterval = setInterval(() => {
            particles.push(spawnParticle())
        }, 200)

        animate()

        return () => {
            clearInterval(spawnInterval)
        }
    }, [])

    return (
        <StyledLightbar>
            <canvas ref={canvasRef} width={1000} height={300} />
            <div />
        </StyledLightbar>
    )
}
