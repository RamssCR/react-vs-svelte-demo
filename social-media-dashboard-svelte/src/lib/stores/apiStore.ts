import { writable } from 'svelte/store'

/**
 * Manages data fetching to an external
 * website using writable stores.
 * 
 * @example
 * ```svelte
 * <script lang="ts">
 *  const { data } = apiStore<{ name: string, age: number }>('/path/to/route')
 * </script>
 * 
 * <h1>My name is {data.name}. I am {data.age} ages old</h1>
 * ```
 */
export function apiStore<T>(url: string, options?: RequestInit) {
    const data = writable<T | null>(null)
    const loading = writable<boolean>(false)
    const error = writable<string | null>(null)

    const fetchData = async () => {
        loading.set(true)
        error.set(null)

        try {
            const response = await fetch(url, options)
            const result = (await response.json()) as T
            data.set(result)
        } catch (err) {
            error.set((err as Error).message)
            console.error(err)
        } finally {
            loading.set(false)
        }
    }

    fetchData()
    return { 
        data, 
        loading, 
        error, 
        refetch: fetchData 
    }
}