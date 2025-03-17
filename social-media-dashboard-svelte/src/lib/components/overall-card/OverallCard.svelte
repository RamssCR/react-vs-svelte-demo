<!--
@component
- Renders the overall component
card for the overall request
properties.
- Usage:
```HTML
    <script lang="ts">
        const { data } = apiStore<Overall>('/path/to/overall-route')
    </script>

    <OverallCard {...data} />
```
-->
<script lang="ts">
    import { unitShortener } from '@lib/utils/unitShortener'
    import type { OverallProps } from '@lib/types/metrics'
    import VariationValue from '@lib/components/total-card/VariationValue.svelte'
    import Image from '@lib/components/ui/Image.svelte'
    import Title from '@lib/components/ui/Title.svelte'
    import Text from '@lib/components/ui/Text.svelte'

    let {
        platform,
        type,
        logo,
        amount,
        today_change,
        increased
    }: OverallProps = $props()
</script>

<article class="w-full flex flex-col gap-8 rounded-lg py-6 px-7 hover:cursor-pointer hover:brightness-90 bg-neutral-blue-light-grayish dark:hover:brightness-125 dark:bg-neutral-blue-dark-desaturated">
    <section class="w-full flex items-center justify-between">
        <Text>{type}</Text>
        <Image src={logo} alt={platform} class="w-6" />
    </section>
    <section class="w-full flex items-end justify-between">
        <Title as="h3" className="text-3xl">{unitShortener(amount)}</Title>
        <VariationValue {increased} {today_change} type="%" />
    </section>
</article>