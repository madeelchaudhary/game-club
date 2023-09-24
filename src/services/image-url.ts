import placeholder from "../assets/placeholder.png";

const getOptimizedImageUrl = (url: string) => {
  if (!url) return placeholder;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const dimensions = "600/400";
  return `${url.slice(0, index)}crop/${dimensions}/${url.slice(index)}`;
};

export default getOptimizedImageUrl;
