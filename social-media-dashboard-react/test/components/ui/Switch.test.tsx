import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import Switch from '@components/ui/Switch'

describe('Switch', () => {
    test('render switch component seamlessly', () => {
        render(<Switch checked={true} />)
        expect(screen.getByRole('checkbox')).toBeDefined()
    })

    test('checks switch component when clicked', async () => {
        render(<Switch checked={false} />)
        const switchElement = screen.getByRole('checkbox') as HTMLInputElement

        await act(async () => userEvent.click(switchElement))
        await waitFor(() => expect(switchElement.checked).toBe(true))
    })

    test('unchecks switch component when clicked', async () => {
        render(<Switch checked={true} />)
        const switchElement = screen.getByRole('checkbox') as HTMLInputElement

        userEvent.click(switchElement)
        await waitFor(() => expect(switchElement.checked).toBe(false))
    })

    test('calls onChange event when clicked', async () => {
        const mockOnChange = vi.fn()
        render(<Switch checked={true} onChange={mockOnChange} />)

        const switchElement = screen.getByRole('checkbox')

        fireEvent.click(switchElement)
        expect(mockOnChange).toHaveBeenCalled()
    })
})