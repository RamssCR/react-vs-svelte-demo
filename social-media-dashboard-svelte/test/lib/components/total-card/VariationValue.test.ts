import { render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import VariationValue from '@lib/components/total-card/VariationValue.svelte'

describe('VariationValue', () => {
    test('renders the component with an increased stat', () => {
        render(VariationValue, { props: { increased: true, today_change: 150, type: 'USD' } })

        const value = screen.getByText('150USD')
        expect(value).toBeDefined()
        expect(value.getAttribute('class')).to.contain('text-primary-turquoise-light')
        expect(screen.getByRole('img', { name: 'Increased' })).toBeDefined()
    })

    test('renders the component with a decreased stat', () => {
        render(VariationValue, { props: { increased: false, today_change: 150, type: 'USD' } })

        const value = screen.getByText('150USD')
        expect(value).toBeDefined()
        expect(value.getAttribute('class')).to.contain('text-primary-red')
        expect(screen.getByRole('img', { name: 'Decreased' })).toBeDefined()
    })
})