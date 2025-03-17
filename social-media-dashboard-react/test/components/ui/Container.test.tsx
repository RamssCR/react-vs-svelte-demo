import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Container from '@components/ui/Container'

describe('Container', () => {
    test('renders the component with a children node', () => {
        render(
            <Container>
                <p>Hello World!</p>
            </Container>
        )

        expect(screen.getByText('Hello World!')).toBeDefined()
    })

    test('renders the component with a children node and a custom class', () => {
        const { container } = render(
            <Container className="grid grid-cols-2 gap-x-5">
                <p>Hello World!</p>
                <button>Say Hi!</button>
            </Container>
        )

        expect(container.querySelector('.grid')).toBeDefined()
    })
})