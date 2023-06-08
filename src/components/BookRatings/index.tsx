import { Text } from "../Typography"
import { UserRatingCard } from "../UserRatingCard"
import { Link } from "../ui/Link"
import { Container } from "./styles"

export const BookRatings = () => {
  function handleRate() {
    console.log('avaliar')
  }
  
  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text='Avaliar' />
      </header>
      <section>
        { Array.from({ length: 10 }).map((_, index) => {
          return (
            <UserRatingCard index={index} rating={{
             rate: 2,
             user: {
              name: 'John Doe',
              avatar_url: 'https://github.com/RayanneRamos.png',
             },
             created_at: new Date(),
             description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi animi dicta vitae laborum unde possimus quam veritatis perspiciatis eius enim! Nostrum debitis quam, totam cum fugit excepturi est libero maiores!',
            }} />
          )
        }) }
      </section>
    </Container>
  )
}

