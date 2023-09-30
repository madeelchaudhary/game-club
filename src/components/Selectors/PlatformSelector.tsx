import { Skeleton } from "@chakra-ui/react";

import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/usePlatforms";
import Selector from "./Selector";
import usePlatform from "../../hooks/usePlatform";

interface Props {
  onSelect: (platformId: number) => void;
  selected?: number;
}

const PlatformSelector = ({ onSelect, selected }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const platform = usePlatform(selected);

  if (isLoading) return <Skeleton h="10" w="32" rounded="md" />;

  if (error) return;

  const handleSelect = (platform: Platform) => {
    const platformId = platform.id;

    onSelect(platformId);
  };

  return (
    <Selector
      label="Platforms"
      items={data || []}
      onSelect={handleSelect}
      selected={platform}
    />
  );
};

export default PlatformSelector;
