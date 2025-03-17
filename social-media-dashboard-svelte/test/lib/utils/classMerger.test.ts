import { describe, expect, test } from 'vitest'
import { classMerger } from '@lib/utils/classMerger'

describe('classMerger', () => {
    test('merges given classes through parameters', () => {
        expect(classMerger('flex', 'flex-col')).to.equal('flex flex-col')
    })

    test('merges given classes in an array', () => {
        expect(classMerger(['flex', 'flex-col'])).to.equal('flex flex-col')
    })

    test('merges given classes with conditionals', () => {
        expect(classMerger('flex items-center', { 'justify-center': true })).to.equal('flex items-center justify-center')
    })
})