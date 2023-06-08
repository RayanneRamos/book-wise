import { ChartLineUp } from "@phosphor-icons/react"
import { PageTitle } from "../ui/Pagetitle"
import { Container } from "./styles"
import { Text } from "../Typography"
import { RatingCard, RatingWithAuthorAndBook } from "../RatingCard"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios"

export const LatestRatings = () => {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(['latest-ratings'], async () => {
    const { data } = await api.get('/ratings/latest')
    return data?.ratings ?? []
  }) 
  
  return (
    <Container>
      <PageTitle 
        title='Início' 
        icon={<ChartLineUp 
        size={32} />} 
        css={{ marginBottom: 40 }}
      />
      <Text size='sm'>Avaliações mais recentes</Text>
      <section>
        { ratings?.map((rating) => {
          return (
            <RatingCard key={rating.id} rating={rating} />
          )
        }) }
      </section>
    </Container>
  )
}

