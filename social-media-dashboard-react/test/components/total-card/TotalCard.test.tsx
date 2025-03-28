import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import TotalCard from '@components/total-card/TotalCard'

vi.mock(import('@components/total-card/VariationValue'), async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        default: ({ increased, today_change, type }) => (
            <span data-testid="variation-value">
                {increased ? '+' : '-'}{today_change}{type}
            </span>
        )
    }
})

vi.mock(import('@components/ui/Image'), async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        default: ({ src, alt, className }) => (
            <img src={src} alt={alt} className={className} />
        )
    }
})

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

vi.mock('@utils/unitShortener', () => ({
    unitShortener: (value: number) => {
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
        } else if (value >= 10000) {
            return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
        } else {
            return value.toString()
        }
    }
}))

describe('TotalCard', () => {
    const mockTotal = {
        id: '1',
        platform: 'Twitter',
        logo: 'twitter-logo.png',
        username: '@example',
        followers: 1234,
        type: 'followers',
        today_change: 50,
        increased: true,
        color: '#1DA1F2'
    }

    test('renders the TotalCard component seamlessly', () => {
        render(<TotalCard total={mockTotal} />)

        expect(screen.getByText('@example')).toBeDefined()
        expect(screen.getByRole('img', { name: 'Twitter' }).getAttribute('src')).to.equal('twitter-logo.png')
        expect(screen.getByText('1234')).toBeDefined()
    })
})