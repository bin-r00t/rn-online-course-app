import { Stack } from "expo-router";
import "../assets/styles/global.css"

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerShown: false
    }}>
    {/* <Stack.Screen name="index"
      options={{
        headerRight: () => <LoginButton />,
      }}
    />
    <Stack.Screen name="details" /> */}
    <Stack.Screen name="(tabs)" />
  </Stack>
}
