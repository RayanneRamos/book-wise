import { signIn } from "next-auth/react";
import { AuthButton, Container } from "./styles";
import { useRouter } from "next/router";
import Image from "next/image";

type AuthButtonsProps = {
  callbackUrl?: string;
  canGuest?: boolean;
};

export function AuthButtons({ callbackUrl = "/", canGuest }: AuthButtonsProps) {
  const router = useRouter();

  function handleSignIn(provider?: string) {
    if (!provider) {
      router.push("/");
      return;
    }

    signIn(provider, {
      callbackUrl,
    });
  }

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn("google")}>
        <Image
          width={32}
          height={32}
          src="/images/icons/google.svg"
          alt="Google Logo"
        />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn("github")}>
        <Image
          width={32}
          height={32}
          src="/images/icons/github.svg"
          alt="Github Logo"
        />
        Entrar com Github
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <Image
            width={32}
            height={32}
            src="/images/icons/rocket.svg"
            alt="Rocket Icon"
          />
          Entrar com visitante
        </AuthButton>
      )}
    </Container>
  );
}
