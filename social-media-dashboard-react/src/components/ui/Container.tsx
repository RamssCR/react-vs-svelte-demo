import type { ReactNode } from "react"
import { classMerger } from '@utils/classMerger'

interface ContainerProps {
    children?: ReactNode
    className?: string
}

/**
 * Renders a component wrapper
 * 
 * @example
 * import Container from '@/components/ui/Container'
 * 
 * function Modal({ children, className }) {}
 */
export default function Container({ children, className }: ContainerProps) {
    return (
        <section
            className={classMerger(
                'w-full max-w-[25.5em] md:max-w-[45em] lg:max-w-[70em] xl:max-w-[80em]',
                className
            )}
        >
            {children}
        </section>
    )
}