import { writable } from 'svelte/store'

type Theme = 'light' | 'dark'

const storedTheme = (localStorage.getItem('theme') as Theme) ?? 'light'
export const theme = writable<Theme>(storedTheme)

theme.subscribe((value) => {
    document.documentElement.classList.toggle('dark', value === 'dark')
    localStorage.setItem('theme', value)
})

export const toggleTheme = () => {
    theme.update((prev) => prev === 'light' ? 'dark' : 'light')
}