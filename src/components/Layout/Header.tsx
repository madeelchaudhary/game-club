import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logoDark from "../../assets/logo-dark.png";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "./SearchInput";

const Header = () => {
  const image = useColorModeValue(logo, logoDark);

  return (
    <HStack px={{ base: 4, sm: 5 }} py={6}>
      <Link to="/">
        <Image maxH={12} src={image} alt="logo" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
