import { FC } from 'react'
import { Form, Header, RegisterContainer } from './styles'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

const Register: FC = () => {
  return (
    <RegisterContainer>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>

        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>

          <TextInput prefix="ignite.com/" placeholder="Seu usuário" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>

          <TextInput placeholder="Seu nome" />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </RegisterContainer>
  )
}

export default Register
