import { Stack } from "expo-router";
import LoginButton from "@/components/ui/LoginButton";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="index"
      options={{
        headerRight: () => <LoginButton />,
      }}
    />
    <Stack.Screen name="details" />
    <Stack.Screen name="login" />
  </Stack>
}
