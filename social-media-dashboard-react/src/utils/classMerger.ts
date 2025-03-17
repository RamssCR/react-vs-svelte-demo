import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple classes into a single string, 
 * removing duplicates and handling conditional 
 * class names.
 * @example
 * const className = classMerger('btn', 'btn-primary', { 'btn-disabled': isDisabled })
 * // class name could be 'btn btn-primary' or 'btn btn-primary btn-disabled' depending on the value of isDisabled
 */
export const classMerger = (...classes: ClassValue[]) => twMerge(clsx(classes))