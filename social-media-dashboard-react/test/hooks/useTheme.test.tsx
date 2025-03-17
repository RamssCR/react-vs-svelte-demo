import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { useTheme } from '../../src/hooks/useTheme'

describe('useTheme', () => {
    const mockStorage: Record<string, string> = {}

    beforeEach(() => {
        vi.stubGlobal('localStorage', {
            getItem: ((key: string) => mockStorage[key] ?? null),
            setItem: ((key: string, value: string) => mockStorage[key] = value)
        })
    })

    test('returns the default theme value', () => {
        const { result } = renderHook(() => useTheme())
        expect(result.current.theme).to.equal('light')
    })

    test('toggles the theme value and returns the new value', async () => {
        const { result } = renderHook(() => useTheme())

        act(() => result.current.toggleTheme())
        await waitFor(() => expect(result.current.theme).to.equal('dark'))

        act(() => result.current.toggleTheme())
        await waitFor(() => expect(result.current.theme).to.equal('light'))
    })
})