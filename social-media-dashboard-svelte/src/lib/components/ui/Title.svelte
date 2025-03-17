<!--
@component
- Renders a reusable title component
- Usage:
```HTML
    <Title as="h2">Hello world</Title>
```
-->
<script lang="ts">
    import type { Snippet } from 'svelte'
    import { classMerger } from '@lib/utils/classMerger'

    interface TitleProps {
        children?: Snippet
        as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        className?: string
    }

    let { children, as = 'h1', className }: TitleProps = $props()
</script>

<svelte:element 
    this={as} 
    class={classMerger('text-neutral-blue-darker dark:text-neutral-white font-semibold', className)}
>
    {@render children?.()}
</svelte:element>