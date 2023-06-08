import Link from "next/link"
import { Container, UserDetails } from "./styles"
import { Rating, User } from "@prisma/client"
import { useSession } from "next-auth/react"
import { Avatar } from "../ui/Avatar"
import { Heading, Text } from "../Typography"
import { getRelativeTimeString } from "@/utils/getRelativeString"
import { RatingStars } from "../RatingStars"

export type RatingWithAuthor = Rating & {
  user: User
}

type UserRatingCardProps = {
  rating: RatingWithAuthor
}

export const UserRatingCard = ({ rating }: UserRatingCardProps) => {
  const { data: session } = useSession()
  const isOwner = session?.user?.id === rating.user_id
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-br')
  
  return (
    <Container variant={ isOwner ? 'highlight' : 'primary' }>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar alt={rating.user.name} src={rating.user.avatar_url!} />
          </Link>
          <div>
            <Heading size='xs'>{rating.user.name}</Heading>
            <Text size='sm' color='gray-400'>{distance}</Text>
          </div>
        </section>
        <RatingStars rating={rating.rate} />
      </UserDetails>
      <Text size='sm' color='gray-300'>{rating.description}</Text>
    </Container>
  )
}