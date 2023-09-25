import { HStack, Image, useColorModeValue } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: Props) => {
  const image = useColorModeValue(logo, logoDark);

  return (
    <HStack py={6}>
      <Image maxH={10} src={image} alt="logo" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
