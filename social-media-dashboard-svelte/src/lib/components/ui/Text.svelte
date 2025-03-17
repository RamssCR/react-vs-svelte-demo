<!--
@component
- Renders a reusable text component
- Usage:
```HTML
    <Text class="text-teal-500">Hello World!</Text>
```
-->
<script lang="ts">
    import type { Snippet } from 'svelte'
    import { classMerger } from '@lib/utils/classMerger'

    interface TextProps {
        children?: Snippet
        className?: string
    }

    let { children, className }: TextProps = $props()
</script>

<p class={classMerger(
    'text-neutral-blue-dark-grayish font-semibold dark:text-neutral-blue-grayish-desaturated',
    className
)}>
    {@render children?.()}
</p>