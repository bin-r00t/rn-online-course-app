import { View } from "react-native";
import StarIcon from "../icons/StarIcon";

type RatingStarsProps = {
  rating: number;
  maxStars?: number;
  size?: number;
  color?: string;
};

export default function RatingStars({
  rating,
  maxStars = 5,
  size = 16,
  color = "gray",
}: RatingStarsProps) {
  return (
    <View className="flex-row">
      {Array.from({ length: maxStars }).map((_, index) => (
        <StarIcon
          key={index}
          size={size}
          color={color}
          filled={index < Math.floor(rating)}
        />
      ))}
    </View>
  );
} 