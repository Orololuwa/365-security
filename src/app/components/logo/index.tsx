"use client";

import { BoxProps, Center, Image, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface LogoProps extends BoxProps {}

export const Logo = ({ ...rest }: LogoProps) => {
  const router = useRouter();

  return (
    <Center
      h="12"
      cursor={"pointer"}
      onClick={() => router.push("/")}
      p="2"
      rounded="md"
      {...rest}
    >
      <Image
        src={useColorModeValue(
          "https://res.cloudinary.com/df1fw15ei/image/upload/v1694364024/food_app_merchant/iymsuwyfsmnnp1ishrah.png",
          "https://res.cloudinary.com/df1fw15ei/image/upload/v1694364265/white_ggfumm.png"
        )}
        alt="Logo"
        height={"28"}
        w={["20", "24", "32"]}
        objectFit={"contain"}
      />
    </Center>
  );
};
