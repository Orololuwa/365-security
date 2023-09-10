"use client";

import { BoxProps, Center, Image } from "@chakra-ui/react";
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
        src={
          "https://res.cloudinary.com/df1fw15ei/image/upload/v1694349614/food_app_merchant/wgbigesakntmktabknax.png"
        }
        alt="Logo"
        height={"28"}
        w={["20", "24", "32"]}
        objectFit={"contain"}
      />
    </Center>
  );
};
