import { View, Text, ImageBackground } from "react-native";
import RatingStars from "./RatingStars";

type CourseCardProps = {
  id: number;
  title: string;
  thumbnail: string;
  tutor: string;
  rate: number;
  rateCount: number;
  enrollStatus: string;
};

export default function CourseCard({
  id,
  title,
  thumbnail,
  tutor,
  rate,
  rateCount,
  enrollStatus,
}: CourseCardProps) {
  return (
    <View className="ml-4 rounded-lg overflow-hidden gap-2">
      <ImageBackground
        source={{ uri: thumbnail }}
        className="w-72 h-40"
      ></ImageBackground>
      <Text className="text-xl font-bold">{title}</Text>
      <Text className="text-sm text-gray-500">{tutor}</Text>
      <View className="flex-row items-center gap-2">
        <Text className="text-bold text-orange-500">{rate}</Text>
        <RatingStars rating={rate} color="orange" />
        <Text className="text-sm text-gray-500">({rateCount})</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Text className="font-extrabold text-xl text-gray-500">{enrollStatus}</Text>
      </View>
    </View>
  );
}
