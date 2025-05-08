import { View, Text, Pressable } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default function StudySessions() {
  return (
    <View className="p-4 bg-white">
      <View className="border border-slate-400 p-4 bg-slate-100 gap-2">
        <View className="py-2 flex-row gap-4">
          {/* icon  */}
          <View className="border border-black w-14 h-24"></View>
          {/* text info  */}
          <View className="gap-1 w-1 flex-1">
            <Text className="font-bold text-lg">Study Sessions</Text>
            {/* auto switching line:  */}
            <Text className="text-gray-500 line-clamp-2">
              We'll pause your notifications so you can learn without distractions.
            </Text>
          </View>
          {/* close button  */}
          <Pressable className="w-10 h-10 border border-gray-400 items-center justify-center">
            <Icon name="settings-outline" size={24} color="#6b7280" />
          </Pressable>
        </View>
        <View className="bg-gray-100 flex-row  items-center justify-between">
          <Text className="font-semibold">Duration</Text>
          <View className="flex-row gap-1 items-center">
            <Text className="font-bold text-indigo-600 text-xl">
              20 minutes
            </Text>
            <Icon name="pencil" size={24} color="#4f46e5" />
          </View>
        </View>
        <Pressable className="bg-black h-16 items-center justify-center flex-row gap-1">
          <Icon name="play-circle-outline" size={24} color="#fff" />
          <Text className="text-white font-semibold text-xl">Start</Text>
        </Pressable>
      </View>
    </View>
  );
}
