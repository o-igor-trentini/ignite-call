import { FC } from 'react'
import { Form } from './styles'
import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export const ClaimUsernameForm: FC = () => {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu usuário" />

      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
