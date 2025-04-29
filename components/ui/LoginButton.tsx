import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function LoginButton() {
    return <Link href="/login" className="text-white text-lg font-semibold">Login</Link>

    //  <TouchableOpacity>
    //     <Link href="/login" className="text-white text-lg font-semibold">Login</Link>
    // </TouchableOpacity>
}