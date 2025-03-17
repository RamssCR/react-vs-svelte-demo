import type { ReactNode } from 'react'
import { classMerger } from '@utils/classMerger'

interface TextProps {
    children?: ReactNode
    className?: string
}

/**
 * Renders a reusable paragraph component
 * that can be personalized with different styles.
 * 
 * @example
 * <Text className="text-lg">Hello, World!</Text>
 */
export default function Text({ children, className }: TextProps) {
    return (
        <p className={classMerger(
            'text-neutral-blue-dark-grayish font-semibold dark:text-neutral-blue-grayish-desaturated', 
            className
        )}>
            {children}
        </p>
    )
}