import { HStack, Image, useColorModeValue } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  const image = useColorModeValue(logo, logoDark);

  return (
    <HStack p="4">
      <Image maxH={"45px"} src={image} alt="logo" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
