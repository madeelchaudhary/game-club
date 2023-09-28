import { Skeleton } from "@chakra-ui/react";

import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/usePlatforms";
import Selector from "./Selector";

interface Props {
  onSelect: (platform: Platform) => void;
  selected: Platform | null;
}

const PlatformSelector = ({ onSelect, selected }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (isLoading) return <Skeleton h="10" w="32" rounded="md" />;

  if (error) return;

  return (
    <Selector
      label="Platforms"
      items={data || []}
      onSelect={onSelect}
      selected={selected}
    />
  );
};

export default PlatformSelector;
