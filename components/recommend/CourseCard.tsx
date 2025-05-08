import { View, Text, ImageBackground } from "react-native";
import RatingStars from "./RatingStars";

type CourseCardProps = {
  id: number;
  title: string;
  thumbnail: string;
  tutor: string;
  rate: number;
  rateCount: number;
  enrollStatus: string | null;
  category: string;
};

export default function CourseCard({
  id,
  title,
  thumbnail,
  tutor,
  rate,
  rateCount,
  enrollStatus,
  category,
}: CourseCardProps) {
  return (
    <View className="w-72 rounded-lg overflow-hidden gap-2">
      <ImageBackground
        source={{ uri: thumbnail }}
        className="w-full h-40"
      ></ImageBackground>
      {/* 标题太长，折行展示 */}
      <Text
        className="text-xl font-bold"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <Text className="text-sm text-gray-500">{tutor}</Text>
      <View className="flex-row items-center gap-2">
        <Text className="text-bold text-orange-500">{rate}</Text>
        <RatingStars rating={rate} color="orange" />
        <Text className="text-sm text-gray-500">({rateCount})</Text>
      </View>
      <View className="flex-row items-center gap-2">
        {enrollStatus ? (
          <Text className="font-extrabold text-xl text-slate-500">
            {enrollStatus}
          </Text>
        ) : (
          <Text className="font-extrabold text-xl text-gray-800">
            {category}
          </Text>
        )}
      </View>
    </View>
  );
}
