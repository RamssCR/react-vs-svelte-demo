<!--
@component
- Renders the application's header with
the theme switcher component.
- Usage:
```HTML
    <Header />
```
-->
<script lang="ts">
    import { apiStore } from '@lib/stores/apiStore'
    import { theme, toggleTheme } from '@lib/stores/themeStore'
    import { currencyFormat } from '@lib/utils/currencyFormat'
    import Container from '@lib/components/ui/Container.svelte'
    import Switch from '@lib/components/ui/Switch.svelte'
    import Title from '@lib/components/ui/Title.svelte'
    import Text from '@lib/components/ui/Text.svelte'

    const { data } = apiStore<{ totalFollowers: number }>('/api/followers.json')
</script>

<header class="w-full bg-neutral-white-pale pt-8 pb-14 rounded-b-3xl dark:bg-neutral-blue-dark lg:pt-10 lg:pb-26">
    <Container className="mx-auto flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
        <section class="w-full flex flex-col items-start gap-1">
            <Title as="h2" className="text-3xl">Social Media Dashboard</Title>
            <Text className="text-[1.25em]">Total followers: {currencyFormat(($data?.totalFollowers as number) ?? 0)}</Text>
        </section>
        <section class="w-full flex items-center justify-between py-5 border-t border-t-neutral-blue-dark-grayish dark:border-t-neutral-blue-dark-grayish lg:border-t-0 lg:justify-end lg:gap-5">
            <Text className="text-[1.25em]">Dark Mode</Text>
            <Switch checked={$theme === 'dark'} onchange={toggleTheme} />
        </section>
    </Container>
</header>