import { View, Text, ImageBackground } from "react-native";

export default function SuitableCourses() {
  return (
    <View className="bg-white">
      <ImageBackground
        source={require("../../assets/images/suitable-courses.png")}
        resizeMode="cover"
        className="w-full h-64"
      >
      </ImageBackground>
      <View className="p-6 gap-1">
        <Text className="text-4xl leading-loose">适合的学习</Text>
        <Text className="text-xl font-extralight text-gray-500">您当前（和未来）的必备技能</Text>
      </View>
    </View>
  );
}
