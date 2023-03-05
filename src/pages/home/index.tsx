import { FC } from 'react'
import { Hero, HomeContainer, Preview } from '@/pages/home/styles'
import { Heading, Text } from '@ignite-ui/react'
import previewImage from '../../assets/appPreview.png'
import Image from 'next/image'

const Home: FC = () => {
  return (
    <HomeContainer>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>

        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </HomeContainer>
  )
}

export default Home
