import {
  Grid,
  Text,
  Flex,
  Heading,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import { RiInformationLine } from "react-icons/ri";

interface ContentProps {
  description: string;
  statistics: Record<
    'countries' | 'languages' | 'cities',
    {
      total: string;
      citites?: string;
    }
  >;
}

export function Content({
  description,
  statistics,
}: ContentProps) {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="gray.700"
        textAlign="justify"
      >
        {description}
      </Text>

      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          direction="column"
          justify="center"
          align={['flex-start', 'flex-start', 'center']}
        >
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="500"
          >
            {statistics.countries.total}
          </Heading>
          <Text fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
            países
          </Text>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align={['flex-start', 'flex-start', 'center']}
        >
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="500"
          >
            {statistics.languages.total}
          </Heading>
          <Text fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
            línguas
          </Text>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align={['flex-start', 'flex-start', 'center']}
        >
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="500"
          >
            {statistics.cities.total}
          </Heading>

          <Text fontWeight="500" fontSize={['md', 'xl']} color="gray.700">
            cidades +100
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={RiInformationLine}
                    ml="1"
                    color="gray.400"
                    w={['10px', '16px']}
                    h={['10px', '16px']}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  {statistics.cities.citites}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
