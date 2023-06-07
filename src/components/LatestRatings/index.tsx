import { ChartLineUp } from "@phosphor-icons/react"
import { PageTitle } from "../ui/Pagetitle"
import { Container } from "./styles"
import { Text } from "../Typography"
import { RatingCard } from "../RatingCard"

export const LatestRatings = () => {
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
        { Array.from({ length: 20 }).map((_, i) => {
          return (
            <RatingCard key={i} rating={{
              id: 'aa',
              rate: 4,
              user: {
                name: 'John Doe',
                avatar_url: 'https://github.com/RayanneRamos.png',
                email: 'johndoe@gmail.com',
                id: 'wefwefwef',
                created_at: new Date(),
              },
              book: {
                author: 'John Doe',
                cover_url: 'https://github.com/RayanneRamos.png',
                id: 'qijfiwf',
                name: 'John Doe',
                summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, delectus eaque omnis numquam earum tenetur eius voluptatem quaerat adipisci. Dolorem ea reiciendis consectetur nisi quia odio. Sequi earum sint fugiat!',
                total_pages: 100,
              },
              created_at: new Date(),
            }} />
          )
        }) }
      </section>
    </Container>
  )
}

