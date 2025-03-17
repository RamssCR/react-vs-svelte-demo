/**
 * Converts a 5 digit greater number into
 * its short version with its representative
 * unit letter.
 * @example
 * import { unitShortener } from '@/utils/unitShortener'
 * 
 * const thousandValue = unitShortener(58000)
 * console.log(thousandValue) // 58k
 * 
 * @example
 * import { unitShortener } from '@/utils/unitShortener'
 * 
 * const millionValue = unitShortener(1000000)
 * console.log(millionValue) // 1M
 * 
 * @example
 * import { unitShortener } from '@/utils/unitShortener'
 * 
 * const lowerValue = unitShortener(8500)
 * console.log(lowerValue) // 8500
 */
export function unitShortener(value: number): string {
    if (value >= 1000000) {
        return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    } else if (value >= 10000) {
        return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
    } else {
        return value.toString()
    }
}