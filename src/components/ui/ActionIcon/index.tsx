import { ReactNode } from "react"
import { Container } from "./styles"
import { theme } from "../../../../stitches.config"
import { ComponentProps } from "@stitches/react"

type ActionInconProps = ComponentProps<typeof Container> &  {
  icon: ReactNode
  iconColor: keyof typeof theme.colors
}

export const ActionIcon = ({ icon, iconColor, ...props }: ActionInconProps) => {
  return (
    <Container {...props} css={{ color: `$${iconColor}` }}>
      {icon}
    </Container>
  )
}