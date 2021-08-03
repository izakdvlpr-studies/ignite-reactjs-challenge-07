import { useRouter } from 'next/router';
import Link from 'next/link';
import { Flex, Grid, GridItem, Icon, Image } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h={['50px', '100px']}
      px="1rem"
      mx="auto"
      align="center"
      justify="center"
      bg="white"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {asPath !== '/' && (
          <Link href="/">
            <a>
              <Icon
                as={IoIosArrowBack}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}

        <Image
          src="/images/logo.svg"
          alt="worldtrip logo"
          w={['81px', '184px']}
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
