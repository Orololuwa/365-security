"use client";

import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Container,
} from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
}

const Feature = ({ title, text }: FeatureProps) => {
  return (
    <Stack>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box>
      <Text
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={{ base: "xl", sm: "3xl" }}
      >
        Our Core Objectives
      </Text>
      <Container maxW={"5xl"} py={12}>
        <Box>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            <Feature
              title={"Specialized Training"}
              text={
                "Our guards undergo specialized training, ensuring they meet your unique security needs."
              }
            />
            <Feature
              title={"Client Satisfaction"}
              text={"Value-added services that promise peace of mind."}
            />
            <Feature
              title={"Tech Integration"}
              text={
                "Modernizing operations with the latest security technology tools."
              }
            />
            <Feature
              title={"Elite Workforce"}
              text={
                "Maintaining a workforce of the highest quality, trained extensively and primed for physical challenges."
              }
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
