import { Link } from "expo-router";
import { View, Text } from "react-native";


export default function UserInfo() {
    return (
        <View className="flex-row bg-white h-32 p-4 py-2 gap-4">
            {/* avatar */}
            <View className="w-20 h-20 border-2 border-indigo-500 rounded-full"></View>
            <View className="flex-1 gap-1">
                <View className="flex-row gap-2">
                    <Text className="text-lg text-gray-700">欢迎, </Text>
                    <Text className="text-lg text-gray-900 font-bold">Bin Liu</Text>
                </View>
                <Text className="text-lg text-gray-500">Full Stack Web Developer</Text>
                <Link href="/settings" className="text-lg text-indigo-500">Edit occupation and interests</Link>
            </View>
        </View>
    )
}