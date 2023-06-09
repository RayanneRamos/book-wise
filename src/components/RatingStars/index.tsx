import { ComponentProps } from "@stitches/react"
import { Container } from "./styles"
import { Star } from '@phosphor-icons/react'
import { useState } from "react"

type RatingStarsProps = ComponentProps<typeof Container> & {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  setRating?: (rating: number) => void
}

export const RatingStars = ({ rating, size = 'sm', setRating, ...props }: RatingStarsProps) => {
  const [ previewValue, setPreviewValue ] = useState(0)
  const isEditable = !!setRating
  const ratingValue = isEditable ? previewValue : rating

  function handleMouseEnter(value: number) {
    if (isEditable) {
      setPreviewValue(value)
    }
  }

  function handleMouseLeave() {
    if (isEditable) {
      setPreviewValue(rating)
    }
  }

  function handleSetValue() {
    if (isEditable) {
      setRating(ratingValue)
    }
  }
  
  return (
    <Container css={isEditable ? { cursor: 'pointer'  } : undefined} size={size} {...props}>
      { Array.from({ length: 5 }).map((_, i) => {
        return (
          <Star  
            key={`star-${i}`}
            weight={(i + 1) <= ratingValue ? 'fill' : 'regular'}
            onMouseEnter={() => handleMouseEnter(i + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={handleSetValue}
          />
        )
      })}
    </Container>
  )
}