import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Box, HStack, Icon } from "@chakra-ui/react";

const ICON_MAP = {
  pc: FaWindows,
  mac: FaApple,
  linux: FaLinux,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  android: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  return (
    <HStack spacing={2}>
      {platforms.map(({ platform }) => {
        const icon = ICON_MAP[platform.slug as keyof typeof ICON_MAP];

        return (
          <Box title={platform.name} key={platform.id}>
            <Icon as={icon} color={"gray.500"} />
          </Box>
        );
      })}
    </HStack>
  );
}

export default PlatformIconList;
