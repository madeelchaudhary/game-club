import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data } = usePlatforms();

  if (!platformId) return undefined;

  const platform = data?.find((platform) => platform.id === platformId);

  return platform;
};

export default usePlatform;
