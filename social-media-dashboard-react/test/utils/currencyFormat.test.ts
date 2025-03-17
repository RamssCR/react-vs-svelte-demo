import { describe, expect, test } from 'vitest'
import { currencyFormat } from '@utils/currencyFormat'

describe('currencyFormat', () => {
    test('formats an integer to currency', () => {
        expect(currencyFormat(1500)).to.equal('1,500')
    })

    test('formats a float number to currency with cents', () => {
        expect(currencyFormat(2150.25)).to.equal('2,150.25')
    })
})