import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import OverallCard from '@components/overall-card/OverallCard'

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

describe('OverallCard', () => {
    const mockOverall = {
        id: '1',
        platform: 'platform',
        type: 'type',
        logo: 'logo',
        amount: 100,
        today_change: 10,
        increased: true
    }

    test('renders the OverallCard component seamlessly', () => {
        render(<OverallCard overall={mockOverall} />)
        
        expect(screen.getByText('type')).toBeDefined()
        expect(screen.getByText('100')).toBeDefined()
    })
})