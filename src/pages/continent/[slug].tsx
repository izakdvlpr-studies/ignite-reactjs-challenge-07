import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Header } from '../../components/Header';

import { Banner } from '../../components/continent/Banner';
import { Content } from '../../components/continent/Content';
import { Cities } from '../../components/continent/Cities';

const continent = {
  name: 'Europa',
  description:
    'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
  banner: '/images/continents/banners/london.png',
  statistics: {
    countries: { total: '50' },
    languages: { total: '100' },
    cities: {
      total: '+100',
      citites:
        'Londres, Paris, Roma, Praga, Amsterdã, Veneza, Atenas, Milão e etc...',
    },
  },
  cities: [
    {
      city: 'Londres',
      image: '/images/cities/london.png',
      country: 'Reino Unido',
      flag: '/images/flags/united-kingdom.png',
    },
    {
      city: 'Paris',
      image: '/images/cities/paris.png',
      country: 'França',
      flag: '/images/flags/france.png',
    },
    {
      city: 'Roma',
      image: '/images/cities/roma.png',
      country: 'Itália',
      flag: '/images/flags/italy.png',
    },
    {
      city: 'Praga',
      image: '/images/cities/praga.png',
      country: 'Republica Tcheca',
      flag: '/images/flags/czech-republic.png',
    },
    {
      city: 'Amsterdã',
      image: '/images/cities/amsterdan.png',
      country: 'Países baixos',
      flag: '/images/flags/netherlands.png',
    },
  ],
};

export default function Continent() {
  return (
    <>
      <Head>
        <title>WorldTrip | {continent.name}</title>
      </Head>

      <Flex direction="column">
        <Header />

        <Banner name={continent.name} banner={continent.banner} />

        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
          <Content
            description={continent.description}
            statistics={continent.statistics}
          />

          <Cities cities={continent.cities} />
        </Flex>
      </Flex>
    </>
  );
}
