import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Title from '@components/ui/Title'

describe('Title', () => {
    test('renders Title component with a default heading size and custom classes', () => {
        render(<Title className="text-primary-scarlet">A very big heading title</Title>)
        const headingTitle = screen.getByText('A very big heading title')

        expect(headingTitle).toBeDefined()
        expect(headingTitle.tagName).to.equal('H1')
        expect(headingTitle.getAttribute('class')).to.contain('text-primary-scarlet')
    })

    test('renders Title component with a custom heading size', () => {
        render(<Title as="h2">A big heading title</Title>)
        const headingTitle = screen.getByText('A big heading title')

        expect(headingTitle).toBeDefined()
        expect(headingTitle.tagName).to.equal('H2')
    })
})