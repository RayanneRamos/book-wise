import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { DefaultLayout } from "@/layouts/defaultLayout";
import { HomeContainer } from "@/styles/pages/home";
import { ProfileRating, ProfileRatings } from "@/components/ProfileRatings";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { ProfileDetails } from "@/components/ProfileDetails";

export type ProfileData = {
  user: {
    avatar_url: string,
    name: string,
    member_since:string,
  },
  ratings: ProfileRating[],
  readPages: number,
  ratedBooks: number,
  readAuthors: number,
  mostReadCategory?: string,
}

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = router.query.id as string;

  const { data: session } = useSession();

  const { data: profile } = useQuery<ProfileData>(["profile", userId], async () => {
    const { data } = await api.get(`/profile/${userId}`)
    return data?.profile ?? {}
  }, {
    enabled: !!userId
  })
  
  const isOwnProfile = session?.user?.id === userId;
  
  return (
    <HomeContainer>
      {!!profile ? (
        <>
          <ProfileRatings isOwnProfile={isOwnProfile} ratings={profile?.ratings} />
          <ProfileDetails profile={profile} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </HomeContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout title='Perfil'>
      {page}
    </DefaultLayout>
  )
}

export default ProfilePage