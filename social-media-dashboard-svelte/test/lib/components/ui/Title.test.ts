import type { Snippet } from 'svelte'
import { render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import Title from '@lib/components/ui/Title.svelte'
import SampleText from './snippets/Text.test.svelte'

describe('Title', () => {
    test('renders the title component with custom classes', () => {
        render(Title, { props: {
            children: SampleText as unknown as Snippet,
            className: 'font-bold text-4xl'
        }})

        const title = screen.getByText('sample test text')
        expect(title).toBeDefined()
        expect(title.getAttribute('class')).to.contain('text-4xl')
    })
})