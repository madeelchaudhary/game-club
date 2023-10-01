import { HStack, Image, useColorModeValue } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQuery from "../store/gameQuery";

const Header = () => {
  const onSearch = useGameQuery((s) => s.setSearch);
  const image = useColorModeValue(logo, logoDark);

  return (
    <HStack py={6}>
      <Image maxH={{ md: 10, base: 6 }} src={image} alt="logo" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
