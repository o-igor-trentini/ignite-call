import { FC } from 'react'
import { Form, FormError, Header, RegisterContainer } from './styles'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { z } from 'zod'
import { FieldError, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((value) => value.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

const Register: FC = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const errors = formState.errors

  const handleRegister = async (values: RegisterFormData): Promise<void> => {
    console.log(values)
  }

  const formatError = (error?: FieldError) =>
    error ? <FormError size="sm">{error.message}</FormError> : <></>

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

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>

          <TextInput
            prefix="ignite.com/"
            placeholder="Seu usuário"
            autoComplete="off"
            {...register('username')}
          />

          {formatError(errors.username)}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>

          <TextInput
            placeholder="Seu nome"
            {...register('name')}
            autoComplete="off"
          />

          {formatError(errors.name)}
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
