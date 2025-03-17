/**
 * Converts a number into a currency format or a 
 * three-patterned format with commas separating 
 * integers and dot to separate decimals.
 * @example
 *  import { currencyFormat } from '@/utils/currencyFormat'
 * 
 *  const price = currencyFormat(1599.99)
 *  console.log(`$${price}`) // $1,599.99
 */
export const currencyFormat = (value: number) => new Intl.NumberFormat('en-US').format(value)