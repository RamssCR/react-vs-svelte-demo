import type { ReactNode } from 'react'
import { classMerger } from '@utils/classMerger'

interface TitleProps {
    children?: ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
}

/**
 * Renders a reusable and customizable
 * title component that can be used to
 * display different headings.
 * 
 * @example
 * <Title as="h2" className="text-xl">Hello World</Title>
 */
export default function Title({ children, as: Tag = 'h1', className }: TitleProps) {
    return (
        <Tag className={classMerger('text-neutral-blue-darker dark:text-neutral-white font-semibold', className)}>
            {children}
        </Tag>
    )
}