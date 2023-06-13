import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogClose, DialogContent, DialogOverlay } from "./styles";
import { X } from "@phosphor-icons/react";
import { Heading } from "../Typography";
import { useRouter } from "next/router";
import { AuthButtons } from "../AuthsButtons";

type LoginDialogProps = {
  children: ReactNode;
};

export const LoginDialog = ({ children }: LoginDialogProps) => {
  const router = useRouter();
  const paramBookId = router.query.book as string;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          <div>
            <Heading size="xs" color="gray-200" css={{ marginBottom: 40 }}>
              Faça login para deixar sua avaliação
            </Heading>
            <AuthButtons
              callbackUrl={
                !!paramBookId ? `/explorer?book=${paramBookId}` : "/explorer"
              }
            />
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
