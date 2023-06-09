import { useSession } from "next-auth/react"
import { ActionsContainer, Container, FormContainer, UserDetails } from "./styles"
import { Avatar } from "../ui/Avatar"
import { Heading } from "../Typography"
import { RatingStars } from "../RatingStars"
import { FormEvent, useState } from "react"
import { TextArea } from "../ui/Form/TextArea"
import { ActionIcon } from "../ui/ActionIcon"
import { Check, X } from "@phosphor-icons/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/axios"

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export const RatingForm = ({ onCancel, bookId }: RatingFormProps) => {
  const { data: session } = useSession()
  const user = session?.user
  const [ currentRate, setcurrentRate ] = useState(0)
  const [ description, setDescription ] = useState('')
  const submitDisabled = !description.trim() || !currentRate
  const queryClient = useQueryClient()
  const { mutateAsync: handleRate } = useMutation(async () => {
    await api.post(`/books/${bookId}/rate`, {
      description,
      rate: currentRate,
    })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['book', bookId])
      queryClient.invalidateQueries(['books'])
      onCancel()
    }
  })
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (submitDisabled) {
      return
    }

    await handleRate()
  }
  
  return (
    <Container>
      { user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <Heading size='xs'>{user.name}</Heading>
          </section>
          <RatingStars size='lg' rating={currentRate} setRating={setcurrentRate} />
        </UserDetails>
      ) }
      <FormContainer onSubmit={handleSubmit}>
        <TextArea 
          placeholder="Escreva sua avaliação" 
          maxLength={450} value={description} 
          onChange={({ target }) => setDescription(target.value)} 
        />
        <ActionsContainer>
          <ActionIcon type='button' onClick={onCancel} iconColor='purple100' icon={<X />} />
          <ActionIcon type='submit' iconColor='green100' icon={<Check />} disabled={submitDisabled} />
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}