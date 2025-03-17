import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

/**
 * Sets the theme of the website to either
 * light theme or dark theme depending
 * on user's preferences.
 * 
 * @example
 * import { useTheme } from '@/hooks/useTheme'
 * 
 * function Component() {
 *  const { theme, toggleTheme } = useTheme()
 * 
 *  return (
 *      <button 
 *          onClick={toggleModal}
 *          className="bg-slate-100 text-black dark:bg-blue-950 dark:text-white"
 *      >
 *          Set the theme to {theme}
 *      </button>
 *  )
 * }
 */
export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => 
        (localStorage.getItem('theme') as Theme ?? 'light')
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

    return { theme, toggleTheme }
}