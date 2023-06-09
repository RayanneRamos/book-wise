import { ReactNode } from "react"
import { Container } from "./styles"
import { Heading, Text } from "@/components/Typography"

type ProfileDetailItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export const ProfileDetailItem = ({ icon, info, label }: ProfileDetailItemProps) => {
  return (
    <Container>
      {icon}
      <div>
        <Heading size='xs' color='gray-300'>{info}</Heading>
        <Text size='sm' color='gray-300'>{label}</Text>
      </div>
    </Container>
  )
}