import { cleanup, fireEvent, render } from '@testing-library/react'
import { bench, describe } from 'vitest'
import Image from '@components/ui/Image'

describe('Components: Event Response Time', () => {
    bench('records image click response', async () => {
        const { getByRole } = render(
            <Image src="path-to/random-image.png" alt="random image" onClick={() => {}} />
        )
        await fireEvent.click(getByRole('img', { name: 'random image' }))
        cleanup()
    })
})