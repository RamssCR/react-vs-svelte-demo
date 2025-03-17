import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { useApi } from '@hooks/useApi';
import Header from '@components/header/Header'

vi.mock(import('@components/ui/Text'), async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        default: ({ children, className }) => (
            <p className={className}>
                {children}
            </p>
        )
    }
})

vi.mock(import('@components/ui/Title'), async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        default: ({ children, className }) => (
            <h1 className={className}>
                {children}
            </h1>
        )
    }
})

vi.mock(import('@components/ui/Container'), async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        default: ({ children, className }) => (
            <section className={className}>
                {children}
            </section>
        )
    }
})

vi.mock(import('@components/ui/Switch'), async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        default: ({ checked, onChange }) => (
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={(event) => onChange && onChange(event.target.checked)} 
            />
        )
    }
})

vi.mock('@hooks/useApi', () => ({
    useApi: vi.fn()
}))

vi.mock('@hooks/useTheme', () => ({
    useTheme: vi.fn().mockReturnValue({
        toggleTheme: vi.fn(),
        theme: 'light'
    })
}))

vi.mock('@utils/currencyFormat', () => ({
    currencyFormat: vi.fn((value: number): string => new Intl.NumberFormat('en-US').format(value))
}))

describe('Header', () => {
    beforeEach(() => {
        (useApi as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            data: null
        })
    })

    test('renders the component with a fulfilled data fetching and a disabled toggle action', async () => {
        (useApi as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            data: { totalFollowers: 1000 }
        })
        render(<Header />)

        const title = screen.getByText('Social Media Dashboard')
        expect(title).toBeDefined()

        const followers = screen.findByText('Total followers: 1,000')
        await waitFor(async () => expect(followers).toBeTruthy())

        const activeSwitch = screen.getByRole('checkbox', { checked: false })
        expect(activeSwitch).toBeTruthy()
    })

    test('renders the component with an unsuccessful data fetching', () => {
        (useApi as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            data: null
        })
        render(<Header />)

        const followers = screen.getByText('Total followers: 0')
        expect(followers).toBeTruthy()
    })
})