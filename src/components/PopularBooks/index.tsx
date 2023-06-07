import { BookCard } from "../BookCard"
import { Text } from "../Typography"
import { Link } from "../ui/Link"
import { Container } from "./styles"

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size='sm'>Livros populares</Text>
        <Link href='/explorer' text='Ver todos' />
      </header>
      <section>
        { Array.from({ length: 4 }).map((_, index) => {
          return (
            <BookCard 
              key={`popular-${index}`} 
              book={{
                author: 'John Doe',
                avgRating: 4,
                cover_url: 'https://github.com/RayanneRamos.png',
                created_at: new Date(),
                id: '',
                name: 'Lorem Ipsum',
                summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, repellendus labore at nesciunt molestiae.',
                total_pages: 100,
              }}
            />
          )
        }) }
      </section>
    </Container>
  )
}

