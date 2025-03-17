import type { ImgHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

/**
 * Renders a reusable and customizable image component
 * 
 * @example
 * import Image from '@/components/ui/Image'
 * 
 * function Avatar({ src, alt }) {
 *     return (
 *         <Image src={src} alt={alt} className="w-12 h-12 rounded-full" />
 *     )
 * }
 */
export default function Image({ src, alt, className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            src={src} 
            alt={alt}
            className={classMerger(className)}
            {...props}
        />
    )
}