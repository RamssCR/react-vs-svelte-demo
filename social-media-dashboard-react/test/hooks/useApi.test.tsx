import { renderHook, waitFor, act } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { useApi } from '../../src/hooks/useApi'

describe('useApi', () => {
    beforeEach(() => {
        window.fetch = vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValue([])
        })
    })

    type TestData = { 
        id: string, 
        name: string, 
        quantity: number 
    }

    const mockUrl = '/api/test.json'

    test('fetches data from an API', async () => {
        const mockData: TestData[] = [{ id: '1', name: 'Test 1', quantity: 1 }]
        window.fetch = vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockData)
        })

        const { result } = renderHook(() => useApi<TestData[]>(mockUrl))
        await waitFor(() => expect(result.current.data).toStrictEqual(mockData))
    })

    test('sets the loading state to true while fetching data', () => {
        window.fetch = vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValue([])
        })

        const { result } = renderHook(() => useApi<TestData[]>(mockUrl))
        act(() => {
            expect(result.current.loading).to.equal(true)
        })
    })

    test('sets the loading state to false after fetching data', async () => {
        window.fetch = vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValue([])
        })

        const { result } = renderHook(() => useApi<TestData[]>(mockUrl))
        await waitFor(() => expect(result.current.loading).to.equal(false))
    })

    test('fails fetching data due to a network error', async () => {
        const mockError = 'Network Error'
        window.fetch = vi.fn().mockRejectedValue(new Error(mockError))

        const { result } = renderHook(() => useApi<TestData>(mockUrl))
        await waitFor(() => expect(result.current.error).to.equal(mockError))
    })
})