import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Text from '@components/ui/Text'

describe('Text', () => {
    test('renders Text component with custom classes', () => {
        render(<Text className="text-primary-blue-light font-bold">Hello World!</Text>)
        expect(screen.getByText('Hello World!')).toBeDefined()
        expect(screen.getByText('Hello World!').getAttribute('class')).to.contain('text-primary-blue-light')
    })
})