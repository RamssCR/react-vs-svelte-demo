import { describe, expect, test } from 'vitest'

describe('test block: Assertions', () => {
    test('validates if 2 + 2 equals 4', () => {
        expect(2 + 2).to.equal(4)
    })

    test('validates if 10 + 15 does not equals 24', () => {
        expect(10 + 15).not.to.equal(24)
    })
})