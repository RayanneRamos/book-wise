import { signOut, useSession } from "next-auth/react"
import { NextPageWithLayout } from "./_app"
import { DefaultLayout } from "@/layouts/defaultLayout"
import { HomeContainer } from "@/styles/pages/home"
import { LatestRatings } from "@/components/LatestRatings"
import { PopularBooks } from "@/components/PopularBooks"

const HomePage: NextPageWithLayout = () => {  
  return (
    <HomeContainer>
      <LatestRatings />
      <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Início">
      {page}
    </DefaultLayout>
  )
}

export default HomePage
