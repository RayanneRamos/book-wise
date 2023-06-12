import { signOut, useSession } from "next-auth/react"
import { Navigation } from "../Navigation"
import { Container, LoginButton, UserDetails } from "./styles"
import { SignIn, SignOut } from "@phosphor-icons/react"
import { Text } from "../Typography"
import { Avatar } from "../ui/Avatar"
import { useRouter } from "next/router"
import Image from "next/image"

export const Sidebar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const user = session?.user

  function handleOpenProfile() {
    router.push(`/profile/${user?.id}`)
  }
  
  return (
    <Container>
      <div>
        <Image width={232} height={58} className="logo" src="/images/logo.svg" alt="BookWise Logo" />
        <Navigation />
      </div>
      <footer>
        { !user ? (
          <LoginButton href="/login">
            Fazer Login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetails>
            <Avatar size='sm' src={user?.avatar_url} alt={user?.name} onClick={handleOpenProfile} css={{ cursor: 'pointer' }} />
            <Text size='sm'>{user?.name}</Text>
            <SignOut size={20} color="#f72a68" onClick={() => signOut()} />
          </UserDetails>
        ) }
      </footer>
    </Container>
  )
}