<!--
@component
- Renders the total component card
for the total request properties.
- Usage:
```HTML
    <script lang="ts">
        const { data } = apiStore<Total>('/path/to/total-route')
    </script>

    <TotalCard {...data} />
```

-->
<script lang="ts">
    import { unitShortener } from '@lib/utils/unitShortener';
    import type { TotalProps } from '@lib/types/metrics'
    import VariationValue from './VariationValue.svelte'
    import Image from '@lib/components/ui/Image.svelte'
    import Title from '@lib/components/ui/Title.svelte'
    import Text from '@lib/components/ui/Text.svelte'

    let { 
        platform,
        logo,
        username,
        followers,
        type,
        today_change,
        increased,
        color
    }: TotalProps = $props()
</script>

<article class={`
    w-full flex flex-col items-center rounded-lg gap-7 py-7 px-3 border-t-6 ${color} hover:cursor-pointer 
    hover:brightness-90 bg-neutral-blue-light-grayish dark:hover:brightness-125 dark:bg-neutral-blue-dark-desaturated
`}>
    <section class="flex items-center gap-3">
        <Image
            src={logo}
            alt={platform}
            title={platform}
            class="w-6"
        />
        <Text>{username}</Text>
    </section>
    <section class="flex flex-col items-center gap-1">
        <Title className="text-6xl">{unitShortener(followers)}</Title>
        <Text className="font-light text-[0.9em] tracking-[0.5em]">{type}</Text>
    </section>
    <VariationValue {increased} {today_change} type=" Today" />
</article>