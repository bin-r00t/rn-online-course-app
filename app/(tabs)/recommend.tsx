import UserInfo from "@/components/recommend/UserInfo";
import { View, Text, Pressable, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import SuitableCourses from "@/components/recommend/SuitableCourses";
import StudySessions from "@/components/recommend/StudySessions";
import RecommendForYou from "@/components/recommend/RecommendForYou";
import PopularForYou from "@/components/recommend/PopularForYou";
export default function Recommend() {
  const onCloseHint = () => {
    console.log("close hint");
  };
  return (
    <ScrollView>
      <UserInfo />
      <View className="bg-purple-700 h-16 justify-center items-center relative">
        <Text className="text-white text-lg">
          按您的日程安排学习未来必备技能
        </Text>
        <Pressable className="absolute right-4" onPress={onCloseHint}>
          <Icon name="close-outline" size={24} color="white" />
        </Pressable>
      </View>
      <SuitableCourses />
      <StudySessions />
      <RecommendForYou />
      <PopularForYou />
    </ScrollView>
  );
}
