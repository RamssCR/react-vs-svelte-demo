import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import VariationValue from '@components/total-card/VariationValue'

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

describe('VariationValue', () => {
    test('renders the component with an increased stat', () => {
        render(<VariationValue increased={true} today_change={150} type="USD" />)

        expect(screen.getByText('150USD')).toBeDefined()
        expect(screen.getByText('150USD').getAttribute('class')).to.contain('text-primary-turquoise-light')
        expect(screen.getByRole('img', { name: 'Increased'})).toBeDefined()
    })

    test('renders the component with a decreased stat', () => {
        render(<VariationValue increased={false} today_change={32} type="%" />)

        expect(screen.getByText('32%')).toBeDefined()
        expect(screen.getByText('32%').getAttribute('class')).to.contain('text-primary-red')
        expect(screen.getByRole('img', { name: 'Decreased' })).toBeDefined()
    })
})