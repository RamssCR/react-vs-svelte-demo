import { cleanup, render } from '@testing-library/svelte'
import { bench, describe } from 'vitest'
import App from '@App.svelte'
import Image from '@lib/components/ui/Image.svelte'
import Title from '@lib/components/ui/Title.svelte'
import type { Snippet } from 'svelte'

describe('Components: Mount Time', () => {
    bench('records app mount time', () => {
        render(App)
        cleanup()
    })

    bench('records image mount time', () => {
        render(Image, { props: { src: './path-to/random-image.png', alt: 'random image' } })
        cleanup()
    })

    bench('records title mount time', () => {
        render(Title, { props: { as: 'h4' } })
        cleanup()
    })
})