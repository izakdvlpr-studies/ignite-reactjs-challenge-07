import Head from 'next/head';
import { Flex, Box, Heading } from '@chakra-ui/react';

import { continents } from '../data';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>

      <Flex direction="column">
        <Header />

        <Banner />
        <TravelTypes />

        <Box
          w={['60px', '90px']}
          mx="auto"
          h="2px"
          bg="gray.700"
          my={['9', '20']}
        />

        <Heading
          textAlign="center"
          fontWeight="500"
          mb={['5', '14']}
          fontSize={['lg', '3xl', '4xl']}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>

        <Slider continents={continents} />
      </Flex>
    </>
  );
}
