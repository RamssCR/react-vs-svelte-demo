import type { Snippet } from 'svelte'
import { render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import Container from '@lib/components/ui/Container.svelte'
import Paragraph from './snippets/Paragraph.test.svelte'

describe('Container', () => {
    test('renders the container component with a paragraph and no custom classes', () => {
        render(Container, { props: { children: Paragraph as unknown as Snippet }});
        expect(screen.getByText('Hello World!')).toBeDefined();
    })

    test('renders the container component with a paragraph and custom classes', () => {
        const { container } = render(Container, { props: {
            children: Paragraph as unknown as Snippet,
            className: 'flex items-center gap-6'
        }})

        expect(screen.getByText('Hello World!')).toBeDefined()
        expect(container.querySelector('.gap-6')).toBeDefined()
    })
})
