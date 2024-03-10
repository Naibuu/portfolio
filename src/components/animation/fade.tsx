import { motion, type MotionProps } from 'framer-motion'

export const Fade = (props: MotionProps) => {
    const { children, ...MotionProps } = props

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            {...MotionProps}
        >
            {props.children}
        </motion.div>
    )
}
