import { TotalProps, OverallProps } from './types/metrics'
import { useApi } from './hooks/useApi'
import Title from './components/ui/Title'
import Header from "./components/header/Header"
import Container from './components/ui/Container'
import TotalCard from './components/total-card/TotalCard'
import OverallCard from './components/overall-card/OverallCard'

export default function App() {
  const { data: totals } = useApi<TotalProps[]>('/api/total.json')
  const { data: overalls } = useApi<OverallProps[]>('/api/overall.json')

  return (
    <main className="mb-8 xl:mb-12">
      <Header />
      <section className="-mt-12 w-full flex flex-col items-center gap-12 lg:-mt-16">
        <Container className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
          {totals?.map(total => (
            <TotalCard key={total.id} total={total} />
          ))}
        </Container>
        <Container className="space-y-7">
          <Title as="h4" className="text-2xl">Overview - Today</Title>
          <section className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
            {overalls?.map(overall => (
              <OverallCard key={overall.id} overall={overall} />
            ))}
          </section>
        </Container>
      </section>
    </main>
  )
}