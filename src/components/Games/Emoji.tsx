import bullseye from "../../assets/bullseye.png";
import thumbsUp from "../../assets/thumbs.png";
import meh from "../../assets/meh.png";
import { Image, ImageProps } from "@chakra-ui/react";

const EMOJI_MAP: Record<number, ImageProps> = {
  3: { src: meh, alt: "meh" },
  4: { src: thumbsUp, alt: "recommended" },
  5: { src: bullseye, alt: "exceptional", boxSize: 30 },
};

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3 || rating > 5) return null;

  return <Image boxSize={25} {...EMOJI_MAP[rating]} />;
};

export default Emoji;
