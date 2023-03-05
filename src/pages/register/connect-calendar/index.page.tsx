import { FC } from 'react'
import { Form, Header, Container } from './../styles'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import {
  ConnectBox,
  ConnectItem,
} from '@/pages/register/connect-calendar/styles'

const ConnectCalendar: FC = () => {
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

            <Button variant="secondary">
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
