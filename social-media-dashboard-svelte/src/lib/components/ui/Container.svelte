<!--
@component
- Renders a container with already
set measures for every breakpoint.
- Usage:
```HTML
    <Container>
        <Text>This is a text inside of a container component</Text>
    </Container>
```

-->
<script lang="ts">
    import type { Snippet } from 'svelte'
    import { classMerger } from '@lib/utils/classMerger'

    interface ContainerProps {
        className?: string,
        children: Snippet
    }

    let { className, children }: ContainerProps = $props()
</script>

<section
    class={classMerger(
        'w-full max-w-[25.5em] md:max-w-[45em] lg:max-w-[70em] xl:max-w-[80em]',
        className
    )}
>
    {@render children?.()}
</section>