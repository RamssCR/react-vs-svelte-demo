import { render, screen } from '@testing-library/svelte'
import { describe, expect, test } from 'vitest'
import TotalCard from '@lib/components/total-card/TotalCard.svelte'

describe('TotalCard', () => {
    test('renders the component seamlessly', () => {
        render(TotalCard, { props: {
            id: '1',
            username: 'ryan',
            type: '%',
            today_change: 50,
            color: 'text-primary-danger',
            platform: 'YouTube',
            logo: 'youtube-logo.png',
            followers: 250,
            increased: true
        }})

        expect(screen.getByText('ryan')).toBeDefined()
        expect(screen.getByRole('img', { name: 'YouTube' }).getAttribute('src')).to.equal('youtube-logo.png')
        expect(screen.getByText('250')).toBeDefined()
    })
})