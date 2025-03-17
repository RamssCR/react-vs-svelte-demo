import { useState, useEffect } from 'react'

/**
 * Handles fetching data from an external
 * API and returns the data, loading state
 * and error message.
 * 
 * @example
 * const { data, loading, error } = useApi<{ id: number, name: string }>('/api/data.json')
 * 
 * return (
 *  <div>
 *      {loading && <p>Loading...</p>}
 *      {error && <p>{error}</p>}
 *      <p>{data?.name}</p>
 *  </div>
 * )
 */
export const useApi = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data: T = await response.json()
                setData(data)
            } catch (error) {
                setError((error as Error).message)
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error }
}