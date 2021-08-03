/* eslint-disable jsx-a11y/alt-text */

import { Box, Grid, Heading, Image, Flex, Text } from '@chakra-ui/react';

interface Town {
  city: string;
  image: string;
  country: string;
  flag: string;
}

interface CitiesProps {
  cities: Town[];
}

function City({ city, image, country, flag }: Town) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={image} alt={`${city}, ${country}`} h="170px" w="100%" />

      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {city}
          </Heading>

          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>

        <Image
          src={flag}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Box>
      <Heading fontWeight="500" fontSize={['2xl', '4xl']} mb="10">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0']}
      >
        {cities.map(({ city, image, country, flag }) => (
          <City
            key={city}
            city={city}
            image={image}
            country={country}
            flag={flag}
          />
        ))}
      </Grid>
    </Box>
  );
}
