<!--
@component
- Renders the entire application
with the data requests for total
and overall component cards.
- Usage:
```TS
const app = mount(App, {
    target: document.getElementById('app')!,
}))
```
-->
<script lang="ts">
    import { apiStore } from './lib/stores/apiStore'
    import type { OverallProps, TotalProps } from './lib/types/metrics'
    import Header from './lib/components/header/Header.svelte'
    import Container from './lib/components/ui/Container.svelte'
    import Title from './lib/components/ui/Title.svelte'
    import TotalCard from './lib/components/total-card/TotalCard.svelte'
    import OverallCard from './lib/components/overall-card/OverallCard.svelte'

    const { data: totals } = apiStore<TotalProps[]>('/api/total.json')
    const { data: overalls } = apiStore<OverallProps[]>('/api/overall.json')
</script>

<main class="mb-8 xl:mb-12">
    <Header />
    <section class="-mt-12 w-full flex flex-col items-center gap-12 lg:-mt-16">
        <Container className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
            {#if $totals}
                {#each $totals as total}
                    <TotalCard {...total} />
                {/each}
            {/if}
        </Container>
        <Container className="space-y-7">
            <Title as="h4" className="text-2xl">Overview - Today</Title>
            <section class="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
                {#if $overalls}
                    {#each $overalls as overall}
                        <OverallCard {...overall} />
                    {/each}
                {/if}
            </section>
        </Container>
    </section>
</main>