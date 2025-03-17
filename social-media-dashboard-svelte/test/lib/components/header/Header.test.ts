import { render, screen, waitFor } from '@testing-library/svelte'
import { describe, expect, test, vi } from 'vitest'
import { apiStore } from '@lib/stores/apiStore'
import Header from '@lib/components/header/Header.svelte'

vi.mock('@lib/stores/apiStore')

describe('Header', () => {
    test('renders the component with a fullfiled data fetching and a disabled toggle action', async () => {
        (apiStore as unknown as ReturnType<typeof vi.fn>).mockReturnValueOnce({$data: { totalFollowers: 25000 }})
        render(Header)

        const headingTitle = screen.getByText('Social Media Dashboard')
        expect(headingTitle).toBeDefined()

        const followers = screen.findByText('Total followers: 25,000')
        await waitFor(async () => expect(followers).toBeTruthy())

        const unactiveSwitch = screen.getByRole('checkbox', { checked: false })
        expect(unactiveSwitch).toBeTruthy()
    })

    test('renders the component with no data loaded', () => {
        (apiStore as unknown as ReturnType<typeof vi.fn>).mockReturnValueOnce({$data: null})
        render(Header)

        const followers = screen.getByText('Total followers: 0')
        expect(followers).toBeDefined()
    })
})