import { TotalProps } from '@/types/metrics'
import { unitShortener } from '@utils/unitShortener'
import Image from '@components/ui/Image'
import Text from '@components/ui/Text'
import Title from '@components/ui/Title'
import VariationValue from './VariationValue'

/**
 * Renders the total component card
 * for the total request properties.
 * 
 * @example
 * import TotalCard from '@/components/total-card/TotalCard'
 * import type { Total } from '@/types/metrics'
 * import { useApi } from '@/hooks/useApi'
 * 
 * function Metrics() {
 *  const { data } = useApi<Total[]>('/path/to/total-route')
 * 
 *  return (
 *      <section>
 *          {data?.map(total => <TotalCard key={total.id} total={total} />)}
 *      </section>
 *  )
 * }
 */
export default function TotalCard({ total }: { total: TotalProps }) {
    const {
        platform,
        logo,
        username,
        followers,
        type,
        today_change,
        increased,
        color
    } = total

    return (
        <article 
            className={`
                w-full flex flex-col items-center rounded-lg gap-7 py-7 px-3 border-t-6 ${color} 
                hover:cursor-pointer hover:brightness-90 bg-neutral-blue-light-grayish 
                dark:hover:brightness-125 dark:bg-neutral-blue-dark-desaturated`
            }
        >
            <section className="flex items-center gap-3">
                <Image 
                    src={logo} 
                    alt={platform}
                    title={platform}
                    className="w-6" 
                />
                <Text>{username}</Text>
            </section>
            <section className="flex flex-col items-center gap-1">
                <Title className="text-6xl">{unitShortener(followers)}</Title>
                <Text className="font-light text-[0.9em] tracking-[0.5em]">{type}</Text>
            </section>
            <VariationValue increased={increased} today_change={today_change} type=' Today' />
        </article>
    )
}