/* eslint-disable jsx-a11y/alt-text */

import { Grid, GridItem, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypesItem {
  icon: string;
  text: string;
}

function TravelTypesItem({ icon, text }: TravelTypesItem) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image src={icon} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}

      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  );
}

export function TravelTypes() {
  return (
    <Grid
      w="100%"
      maxW="1160px"
      mt={['10', '32']}
      mx="auto"
      flexWrap="wrap"
      justify="space-between"
      align="center"
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      gap={[1, 5]}
    >
      <GridItem>
        <TravelTypesItem
          icon="/images/icons/cocktail.svg"
          text="vida noturna"
        />
      </GridItem>

      <GridItem>
        <TravelTypesItem icon="/images/icons/surf.svg" text="praia" />
      </GridItem>

      <GridItem>
        <TravelTypesItem icon="/images/icons/building.svg" text="moderno" />
      </GridItem>

      <GridItem>
        <TravelTypesItem icon="/images/icons/museum.svg" text="clássico" />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelTypesItem icon="/images/icons/earth.svg" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
