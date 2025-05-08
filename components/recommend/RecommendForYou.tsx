import { View, Text, ScrollView } from "react-native";
import CourseCard from "./CourseCard";

export default function RecommendForYou() {
  return (
    <View className="py-8 bg-white gap-2">
      <Text className="p-2 px-4 text-3xl">为您推荐</Text>
      {/* horizontal scroll  */}
      <ScrollView horizontal className="">
        <CourseCard
          id={1}
          title="FFmpeg - The Complete Guide"
          thumbnail="https://picsum.photos/200/300"
          tutor="John Doe"
          rate={4.5}
          rateCount={100}
          enrollStatus="Enrolled"
        />
        <CourseCard
          id={2}
          title="FFmpeg - The Complete Guide"
          thumbnail="https://picsum.photos/200/300"
          tutor="John Doe"
          rate={4.5}
          rateCount={100}
          enrollStatus="Enrolled"
        />
        <CourseCard
          id={3}
          title="FFmpeg - The Complete Guide"
          thumbnail="https://picsum.photos/200/300"
          tutor="John Doe"
          rate={4.5}
          rateCount={100}
          enrollStatus="Enrolled"
        />
      </ScrollView>
    </View>
  );
}
