import { Link } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";

export default function LoginButton() {
    function onPress() {
        console.log("Login Button Pressed");
    }
    return <Link href="/login" className="mr-6 text-white text-lg font-semibold">Login</Link>
}