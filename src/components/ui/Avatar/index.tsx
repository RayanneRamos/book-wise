import { ComponentProps } from "@stitches/react"
import { AvatarImage, Container } from "./styles"

type AvatarProps = ComponentProps<typeof Container> & {
  src: string
  size?: 'sm' | 'md' | 'lg'
  alt: string
}

export const Avatar = ({ src, size = 'md', alt, ...props }: AvatarProps) => {
  return (
    <Container size={size} {...props}>
      <AvatarImage src={src} width={80} height={80} alt={alt} />
    </Container>
  )
}