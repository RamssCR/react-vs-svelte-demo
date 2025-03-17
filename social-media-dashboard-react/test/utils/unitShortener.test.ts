import { describe, expect, test } from 'vitest'
import { unitShortener } from '@utils/unitShortener'

describe('unitShortener', () => {
    test('shortens a number greater than 10000 to a k unit', () => {
        expect(unitShortener(15000)).to.equal('15k')
    })

    test('shortens a number greater than 1000000 to a m unit', () => {
        expect(unitShortener(2500000)).to.equal('2.5M')
    })

    test('leaves a number lower than 10000 as is', () => {
        expect(unitShortener(8500)).to.equal('8500')
    })
})