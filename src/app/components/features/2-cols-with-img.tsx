"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiCctvCamera, GiGuards, GiSecurityGate } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { TbUserSearch } from "react-icons/tb";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={{ base: "12", md: "32" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About 365 Security Ltd
          </Text>
          {/* <Heading>A digital Product design agency</Heading> */}
          <Text color={"gray.500"} fontSize={"lg"}>
            We are a registered Security Services provider, proudly backed by
            retired security professionals with over 40 years of expertise. Our
            commitment to excellence is built on the vast knowledge and skills
            acquired over the years. Our Services includes:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={FaPeopleArrows} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Security consultancy"}
            />
            <Feature
              icon={
                <Icon as={GiSecurityGate} color={"green.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Manned & Static guarding"}
            />
            <Feature
              icon={<Icon as={GiCctvCamera} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Alarm & electronic system installations"}
            />
            <Feature
              icon={<Icon as={SiAdguard} color={"cyan.500"} w={5} h={5} />}
              iconBg={useColorModeValue("cyan.100", "cyan.900")}
              text={"Armed escort services"}
            />
            <Feature
              icon={<Icon as={GiGuards} color={"blue.500"} w={5} h={5} />}
              iconBg={useColorModeValue("blue.100", "blue.900")}
              text={"Comprehensive security training"}
            />
            <Feature
              icon={<Icon as={TbUserSearch} color={"orange.500"} w={5} h={5} />}
              iconBg={useColorModeValue("orange.100", "orange.900")}
              text={"Preliminary investigative services"}
            />
          </Stack>
          <Text pt="2" fontStyle={"italic"}>
            ...and many more specialized services tailored for you.
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://res.cloudinary.com/df1fw15ei/image/upload/v1694351183/food_app_merchant/rms1qbzcl0kc5pxyp5y9.jpg"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
