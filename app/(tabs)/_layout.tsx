import { Tabs } from "expo-router";
import LoginButton from "@/components/ui/LoginButton";

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
            headerRight: () => <LoginButton />
        }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="home" />
            <Tabs.Screen name="settings" />
        </Tabs>
    )
}