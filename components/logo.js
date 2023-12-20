import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;

  img {
    transform: rotate(-20deg);
  }

  &:hover img {
    transform: rotate(0deg);
  }
`

const Logo = () => {
  const Img = ``

  return (
    <Link href="/">
      <LogoBox>
        <Image src={Img} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Atharva Belapurkar
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
