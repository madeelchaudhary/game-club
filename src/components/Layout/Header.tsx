import { HStack, Image, useColorModeValue } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import logoDark from "../../assets/logo-dark.png";
import logo from "../../assets/logo.png";
import useGameQuery from "../../store/gameQuery";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";

const Header = () => {
  const onSearch = useGameQuery((s) => s.setSearch);
  const image = useColorModeValue(logo, logoDark);

  return (
    <HStack px={{ base: 4, sm: 5 }} py={6}>
      <Link to="/">
        <Image maxH={12} src={image} alt="logo" />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
