import { Tabs } from "expo-router";
import LoginButton from "@/components/ui/LoginButton";
import { Octicons, Fontisto } from "@expo/vector-icons";

export default function TabsLayout() {
    /** two tabs, home page & settings */
    return (
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Tabs.Screen name="(main)" options={{
                title: 'Index',
                // headerShown: false,
                headerRight: () => <LoginButton />,
                tabBarIcon: ({ color }) => <Octicons size={24} name="apps" color={color} />,
            }} />
            <Tabs.Screen name="home" options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <Octicons size={24} name="home" color={color} />,
            }} />
            <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: ({ color }) => <Octicons size={24} name="gear" color={color} />,
            }} />
            <Tabs.Screen name="(profile)" options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color }) => <Octicons size={24} name={"person"} color={color} />
            }} />
        </Tabs>
    )
}