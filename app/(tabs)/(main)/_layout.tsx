import { Stack } from "expo-router";
import LoginButton from "@/components/ui/LoginButton";

export default function TabsLayout() {
    /** two tabs, home page & settings */
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: false
        }}>
            <Stack.Screen name='index' options={{
            }} />
            <Stack.Screen name='hello' options={{
            }} />
        </Stack>
    )
}