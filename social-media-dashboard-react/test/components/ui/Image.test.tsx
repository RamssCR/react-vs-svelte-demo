import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Image from '@components/ui/Image'

describe('Image', () => {
    test('renders the component with a custom class', () => {
        render(
            <Image
                src='https://via.placeholder.com/150'
                alt='Placeholder'
                className='rounded-full border-2 border-primary-pink'
            />
        )

        expect(screen.getByRole('img', { name: 'Placeholder'})).toBeDefined()
        expect(screen.getByRole('img', { name: 'Placeholder'}).getAttribute('class')).to.contain('border-2')
    })
})