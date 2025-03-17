import { useState } from 'react'

interface SwitchProps {
    checked?: boolean
    onChange?: (checked: boolean) => void
}

/**
 * Renders a reusable switch component
 * for more interactive user experience.
 * 
 * @example
 * import Switch from '@components/ui/Switch'
 * 
 * function Settings() {
 *  const [theme, setTheme] = useState('light')
 *  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
 *  
 *  return (
 *      <div className="flex items-center justify-between">
 *         <Switch checked={theme === 'dark'} onChange={toggleTheme} />
 *     </div>
 *  )
 * }
 */
export default function Switch({ checked = false, onChange }: SwitchProps) {
    const [active, setActive] = useState<boolean>(checked)

    const handleSwitch = () => {
        const toggleActive = !active
        setActive(toggleActive)
        onChange?.(toggleActive)
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input 
                type="checkbox"
                className="sr-only peer"
                checked={active}
                onChange={handleSwitch}
            />
            <div className="w-14 h-7 bg-primary-gray rounded-full peer-checked:bg-linear-to-r peer-checked:from-primary-blue-grayish peer-checked:to-primary-turquoise-light peer-checked:transition-all" />
            <div className="absolute left-1 top-1 w-5 h-5 bg-neutral-white-pale rounded-full transition-all peer-checked:bg-neutral-blue-dark-desaturated peer-checked:translate-x-7" />
        </label>
    )
}