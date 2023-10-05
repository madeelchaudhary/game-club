import { Box, HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

type Platform = Game["parent_platforms"][number];

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
        if (platform.slug in ICON_MAP === false) return null;
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
