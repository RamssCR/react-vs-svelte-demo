<!--
@component
- Renders a reusable image tag
- Usage:
  ```HTML
    <Image 
        src="https://random.image.com" 
        alt="Random Image" 
        class="size-10" 
    />
  ```
-->
<script lang="ts">
    import type { HTMLImgAttributes } from "svelte/elements"
    import { classMerger } from '@lib/utils/classMerger'

    let { src, alt, class: className, ...props }:HTMLImgAttributes = $props()
</script>

<img 
    {src} 
    {alt}
    class={classMerger(className)}
    {...props}
>