import upIcon from '@assets/icon-up.svg'
import downIcon from '@assets/icon-down.svg'
import Image from '@components/ui/Image'
import Text from '@components/ui/Text'

interface VariationValueProps {
    increased: boolean
    type: string
    today_change: number
}

/**
 * Renders the components that shows the 
 * variation of a metric per component card.
 * 
 * @example
 * import VariationValue from '@/components/total-card/VariationValue'
 * 
 * function TotalCard({ name, age, purchases }: { name: string, age: number, purchases: number }) {
 *  return (
 *      <VariationValue
 *          increased={true}
 *          type=" Today"
 *          today_change={313} 
 *      />
 *  )
 * }
 */
export default function VariationValue({ increased, type, today_change }: VariationValueProps) {
    return (
        <article className="flex items-center gap-1">
            <Image
                src={increased ? upIcon : downIcon}
                alt={increased ? 'Increased' : 'Decreased'}
                className="w-2 h-1"
            />
            <Text 
                className={increased 
                    ? "text-primary-turquoise-light dark:text-primary-turquoise-light" 
                    : "text-primary-red dark:text-primary-red"
                }
            >
                {today_change + type}
            </Text>
        </article>
    )
}