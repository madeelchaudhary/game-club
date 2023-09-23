const getOptimizedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const dimensions = "600/400";
  return `${url.slice(0, index)}crop/${dimensions}/${url.slice(index)}`;
};

export default getOptimizedImageUrl;
