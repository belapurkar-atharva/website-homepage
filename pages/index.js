import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={3}
        align="center"
      >
        Hello, Atharva is a full-stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Atharva Belapurkar
          </Heading>
          <p>End-to-End Engineer ( Artist / Developer / Designer ) </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/atharva.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Atharva is a full-stack developer based in Pune with a passion for
          building digital services/stuff he wants. He has a knack for all
          things launching products, from planning and designing all the way to
          solving real-life problems with code. When not online, he loves
          watching/reading Anime and Manga.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
