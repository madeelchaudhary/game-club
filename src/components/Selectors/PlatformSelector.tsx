import { Skeleton } from "@chakra-ui/react";

import usePlatform from "../../hooks/usePlatform";
import usePlatforms from "../../hooks/usePlatforms";
import useGameQuery from "../../store/gameQuery";
import Selector from "./Selector";

const PlatformSelector = () => {
  const [selected, setPlatformId] = useGameQuery((s) => [
    s.query.platformId,
    s.setPlatformId,
  ]);
  const { data, error, isLoading } = usePlatforms();
  const platform = usePlatform(selected);

  if (isLoading) return <Skeleton h="10" w="32" rounded="md" />;

  if (error) return;

  const handleSelect = (platform: Platform) => {
    const platformId = platform.id;

    setPlatformId(platformId);
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
