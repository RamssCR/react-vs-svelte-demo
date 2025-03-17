import { cleanup, render } from '@testing-library/react'
import { describe, bench } from 'vitest'
import Image from '@components/ui/Image'
import Title from '@components/ui/Title'
import App from '@App'

describe('Components: Mount Time', () => {
    bench('records app mount time', () => {
        render(<App />)
        cleanup()
    })

    bench('records image mount time', () => {
        render(<Image src='./path-to/random-image.png' alt='random image' />)
        cleanup()
    })

    bench('records title mount time', () => {
        render(<Title as="h3">A kinda big heading title</Title>)
        cleanup()
    })
})