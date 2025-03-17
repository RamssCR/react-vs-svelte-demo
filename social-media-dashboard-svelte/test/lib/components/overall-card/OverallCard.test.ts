import { render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import OverallCard from '@lib/components/overall-card/OverallCard.svelte'

describe('OverallCard', () => {
    test('renders the component seamlessly', () => {
        render(OverallCard, { props: {
            id: '2',
            platform: 'Facebook',
            logo: 'facebook-logo.png',
            amount: 250,
            today_change: 12,
            type: 'followers',
            increased: true
        }})

        expect(screen.getByText('250')).toBeDefined()
        expect(screen.getByText('followers')).toBeDefined()
    })
})