import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { get } from 'svelte/store'
import { apiStore } from '@lib/stores/apiStore'

describe('apiStore', () => {
    const mockUrl = '/api/test'
    beforeEach(() => {
        vi.useFakeTimers()
        vi.restoreAllMocks()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    test('fetches and sets data correctly', async () => {
        const mockData = { name: 'Alice', age: 30 } 
        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData)
            })
        ))
        const { data, loading, error } = apiStore<typeof mockData>(mockUrl)

        expect(get(loading)).toBe(true)

        await vi.runAllTimersAsync()

        expect(get(data)).toEqual(mockData)
        expect(get(loading)).toBe(false)
        expect(get(error)).toBe(null)
    })

    test('sets error correctly on failed fetch', async () => {
        const errorMessage = 'Network Error'
        vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error(errorMessage))))
        const { data, loading, error } = apiStore(mockUrl)

        expect(get(loading)).toBe(true)

        await vi.runAllTimersAsync()

        expect(get(data)).toBe(null)
        expect(get(loading)).toBe(false)
        expect(get(error)).toBe(errorMessage)
    })
})
