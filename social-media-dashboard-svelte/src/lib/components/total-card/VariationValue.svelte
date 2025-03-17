<!--
@component
- Renders a component that shows the
variation of a metric per component card
- Usage:
```HTML
    <VariationValue increased={false} type="%" today_change={66} />
```
-->
<script lang="ts">
    import Image from '@lib/components/ui/Image.svelte'
    import Text from '@lib/components/ui/Text.svelte'
    import downIcon from '@assets/icon-down.svg'
    import upIcon from '@assets/icon-up.svg'

    interface VariationValueProps {
        increased: boolean
        type: string
        today_change: number
    }

    let { increased, type, today_change }: VariationValueProps = $props()
</script>

<article class="flex items-center gap-1">
    <Image 
        src={increased ? upIcon : downIcon}
        alt={increased ? 'Increased' : 'Decreased'}
        class="w-2 h-1"
    />
    <Text
        className={increased
            ? 'text-primary-turquoise-light dark:text-primary-turquoise-light'
            : 'text-primary-red dark:text-primary-red'
        }
    >
        {today_change + type}
    </Text>
</article>