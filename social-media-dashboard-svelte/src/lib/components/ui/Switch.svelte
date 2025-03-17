<!--
@component
- Renders a reusable switch that allows you to
make two option settings more intuitive.
- Usage:
```HTML
    <Switch checked={theme === 'dark'} />
```
-->
<script lang="ts">
    interface SwitchProps {
        checked?: boolean
        onchange?: () => void
    }

    const { checked = false, onchange }: SwitchProps = $props()
    let activate: boolean = $state(checked)
</script>

<label class="relative inline-flex items-center cursor-pointer">
    <input 
        type="checkbox" 
        class="sr-only peer" 
        bind:checked={activate} 
        {onchange}
    />
    <div class="w-14 h-7 bg-primary-gray rounded-full peer-checked:bg-linear-to-r peer-checked:from-primary-blue-grayish peer-checked:to-primary-turquoise-light peer-checked:transition-all"></div>
    <div class="absolute left-1 top-1 w-5 h-5 bg-neutral-white-pale rounded-full transition-all peer-checked:bg-neutral-blue-dark-desaturated peer-checked:translate-x-7"></div>
</label>