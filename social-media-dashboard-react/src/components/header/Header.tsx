import { currencyFormat } from "@utils/currencyFormat"
import Container from "@components/ui/Container"
import Switch from "@components/ui/Switch"
import Title from "@components/ui/Title"
import Text from "@components/ui/Text"
import { useApi } from "@hooks/useApi"
import { useTheme } from "@hooks/useTheme"

/**
 * Renders the application's header
 * with the theme switcher component.
 * @example
 * import Header from '@components/header/Header'
 * 
 * function App() {
 *  return (
 *      <Header />
 *  )
 * }
 */
export default function Header() {
    const { data } = useApi<{ totalFollowers: number }>('/api/followers.json')
    const { toggleTheme, theme } = useTheme()

    return (
        <header className="w-full bg-neutral-white-pale pt-8 pb-14 rounded-b-3xl dark:bg-neutral-blue-dark lg:pt-10 lg:pb-26">
            <Container className="mx-auto flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
                <section className="w-full flex flex-col items-start gap-1">
                    <Title as="h2" className="text-3xl">Social Media Dashboard</Title>
                    <Text className="text-[1.25em]">Total followers: {currencyFormat((data?.totalFollowers as number) ?? 0)}</Text>
                </section>
                <section 
                    className="w-full flex items-center justify-between py-5 border-t border-t-neutral-blue-dark-grayish dark:border-t-neutral-blue-dark-grayish lg:border-t-0 lg:justify-end lg:gap-5"
                >
                    <Text className="text-[1.25em]">Dark Mode</Text>
                    <Switch checked={theme === 'dark'} onChange={toggleTheme} />
                </section>
            </Container>
        </header>
    )
}