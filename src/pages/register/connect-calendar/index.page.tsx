import { FC } from 'react'
import { Container, Header } from './../styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
import {
  AuthError,
  ConnectBox,
  ConnectItem,
} from '@/pages/register/connect-calendar/styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const ConnectCalendar: FC = () => {
  const router = useRouter()
  const session = useSession()
  const hasAuthError = !!router.query.error
  const isAuthenticated = session.status === 'authenticated'

  const handleConnect = async (): Promise<void> => {
    await signIn('google')
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte a sua agenda!</Heading>

        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>

            {isAuthenticated ? (
              <Button variant="primary" size="sm" disabled>
                Conectado
                <Check />
              </Button>
            ) : (
              <Button variant="secondary" size="sm" onClick={handleConnect}>
                Conectar
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Calendar
            </AuthError>
          )}

          <Button disabled={!isAuthenticated}>
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Header>
    </Container>
  )
}

export default ConnectCalendar
