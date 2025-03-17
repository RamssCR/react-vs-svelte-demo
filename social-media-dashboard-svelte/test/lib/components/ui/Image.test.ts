import { render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import Image from '@lib/components/ui/Image.svelte'

describe('Image', () => {
    test('renders the component with a custom class', () => {
        render(Image, { props: 
            { 
                src: 'https://via.placeholder.com', 
                alt: 'Placeholder', 
                class: 'size-16' 
            } 
        })

        const image = screen.getByRole('img', { name: 'Placeholder' })
        expect(image).toBeDefined()
        expect(image.getAttribute('class')).to.contain('size-16')
    })
})