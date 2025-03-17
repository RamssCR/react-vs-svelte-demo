import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { get } from 'svelte/store'
import { theme, toggleTheme } from '@lib/stores/themeStore'

describe('themeStore', () => {
    let localStorageMock: Record<string, string>
    let classListMock: { add: typeof vi.fn, remove: typeof vi.fn, toggle: typeof vi.fn }

    beforeEach(() => {
        localStorageMock = {}
        vi.stubGlobal('localStorage', {
            getItem: vi.fn((key) => localStorageMock[key] || null),
            setItem: vi.fn((key, value) => { localStorageMock[key] = value }),
            removeItem: vi.fn((key) => { delete localStorageMock[key] }),
            clear: vi.fn(() => { localStorageMock = {} })
        })

        classListMock = {
            add: vi.fn(),
            remove: vi.fn(),
            toggle: vi.fn()
        }

        vi.stubGlobal('document', {
            documentElement: {
                classList: classListMock
            }
        })
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('initializes with theme from localStorage', async () => {
        localStorageMock['theme'] = 'light'
        const { theme: newTheme } = await import('@lib/stores/themeStore')
        expect(get(newTheme)).toBe('light')
    })

    test('subscribes and updates class and localStorage on theme change', () => {
        theme.set('dark')

        expect(classListMock.toggle).toHaveBeenCalledWith('dark', true)
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark')

        theme.set('light')

        expect(classListMock.toggle).toHaveBeenCalledWith('dark', false)
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light')
    })

    test('toggles theme correctly', () => {
        theme.set('light')
        toggleTheme()

        expect(get(theme)).toBe('dark')
        expect(classListMock.toggle).toHaveBeenCalledWith('dark', true)
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark')

        toggleTheme()

        expect(get(theme)).toBe('light')
        expect(classListMock.toggle).toHaveBeenCalledWith('dark', false)
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light')
    })
})
