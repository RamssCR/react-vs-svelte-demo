import { OverallProps } from '@/types/metrics'
import { unitShortener } from '@utils/unitShortener'
import VariationValue from '@components/total-card/VariationValue'
import Image from '@components/ui/Image'
import Title from '@components/ui/Title'
import Text from '@components/ui/Text'

/**
 * Renders the overall card component
 * for the overall request properties.
 * 
 * @example
 * import OverallCard from '@/components/overall-card/OverallCard'
 * import type { Overall } from '@/types/metrics'
 * import { useApi } from '@/hooks/useApi'
 * 
 * function Metrics() {
 *  const { data } = useApi<Overall[]>('/path/to/overall-route')
 * 
 *  return (
 *      <section>
 *          {data?.map(overall => <OverallCard key={overall.id} overall={overall} />)}
 *      </section>
 *  )
 * }
 */
export default function OverallCard({ overall }: { overall: OverallProps }) {
    const {
        platform,
        type,
        logo,
        amount,
        today_change,
        increased
    } = overall

    return (
        <article 
            className="w-full flex flex-col gap-8 rounded-lg py-6 px-7 hover:cursor-pointer hover:brightness-90 bg-neutral-blue-light-grayish dark:hover:brightness-125 dark:bg-neutral-blue-dark-desaturated"
        >
            <section className="w-full flex items-center justify-between">
                <Text>{type}</Text>
                <Image src={logo} alt={platform} className="w-6" />
            </section>
            <section className="w-full flex items-end justify-between">
                <Title as="h3" className="text-3xl">{unitShortener(amount)}</Title>
                <VariationValue increased={increased} today_change={today_change} type='%' />
            </section>
        </article>
    )
}