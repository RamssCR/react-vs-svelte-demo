import { act, render, screen, waitFor } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import userEvent from '@testing-library/user-event'
import Switch from '@lib/components/ui/Switch.svelte'

describe('Switch', () => {
    test('renders the switch component seamlessly', () => {
        render(Switch, {props: {checked: true}})
        expect(screen.getByRole('checkbox')).toBeDefined()
    })

    test('checks component when clicked', async () => {
        render(Switch, {props: {checked: false}})
        const switchElement = screen.getByRole('checkbox') as HTMLInputElement

        await act(async () => userEvent.click(switchElement))
        await waitFor(() => expect(switchElement.checked).to.equal(true))
    })

    test('unchecks switch component when clicked', async () => {
        render(Switch, {props: {checked: true}})
        const switchElement = screen.getByRole('checkbox') as HTMLInputElement

        await act(async () => userEvent.click(switchElement))
        await waitFor(() => expect(switchElement.checked).to.equal(false))
    })
})