import { FC } from 'react'
import { Container, Header } from './../styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import {
  ConnectBox,
  ConnectItem,
} from '@/pages/register/connect-calendar/styles'
import { signIn, useSession } from 'next-auth/react'

const ConnectCalendar: FC = () => {
  const session = useSession()

  console.log(JSON.stringify(session.data))

  const handleConnect = (): void => {
    signIn('google').then()
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

            <Button variant="secondary" onClick={handleConnect}>
              Conectar
              <ArrowRight />
            </Button>
          </ConnectItem>

          <Button>
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Header>
    </Container>
  )
}

export default ConnectCalendar
