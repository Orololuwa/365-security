"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const clienteles = [
  "Aviation sector",
  "Recreation centres",
  "Embassies",
  "Small, Medium & Large businesses",
  "Hospitality sector",
  "Oil & Gas sector",
  "Schools",
  "Local Councils",
  "Restaurants",
  "	Government Agencies",
  "	Telecommunications sector",
  "	Fuel stations",
  "	Construction sites",
  "	Private residences ",
  "	Estates",
  "	Hospitals",
  "	Special events",
];

export default function GridListWithHeading() {
  return (
    <Box px="10" py="20">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Our Trusted Clientele</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          From the aviation sector to special events, we proudly serve a diverse
          range of clients. Discover who trusts 365 Security.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {clienteles.map((cli, idx) => (
            <HStack key={idx} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{cli}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
