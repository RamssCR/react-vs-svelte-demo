import type { Snippet } from 'svelte'
import { render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import Text from '@lib/components/ui/Text.svelte'
import SampleText from './snippets/Text.test.svelte'

describe('Text', () => {
    test('renders text component with custom classes', () => {
        render(Text, { props: {
            children: SampleText as unknown as Snippet,
            className: 'text-lg font-semibold, text-primary-red'
        }})
        const text = screen.getByText('sample test text')
        
        expect(text).toBeDefined()
        expect(text.getAttribute('class')).to.contain('font-semibold')
    })
})