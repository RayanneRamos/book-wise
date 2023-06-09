import { Fragment, useState } from "react"
import { Text } from "../Typography"
import { RatingWithAuthor, UserRatingCard } from "../UserRatingCard"
import { Link } from "../ui/Link"
import { Container } from "./styles"
import { RatingForm } from "../RatingForm"
import { useSession } from "next-auth/react"
import { LoginDialog } from "../LoginDialog"

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({ ratings, bookId }: BookRatingsProps) => {
  const { status, data: session } = useSession()
  const  [ showForm, setShowForm ] = useState(false)
  const isAuthenticated = status === 'authenticated'
  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
  const canRate = ratings.every(x => x.user_id !== session?.user?.id)
  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog
  
  function handleRate() {
    if (!isAuthenticated) {
      return 
    }

    setShowForm(true)
  }
  
  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        { canRate && (
          <RatingWrapper>
            <Link withoutIcon onClick={handleRate} text='Avaliar' />
          </RatingWrapper>
        ) }
      </header>
      <section>
        { showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} /> }
        {sortedRatingsByDate.map((rating) => {
          return (
            <UserRatingCard key={rating.id} rating={rating} />
          )
        }) }
      </section>
    </Container>
  )
}

