import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function SettingsPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ title: '设置' }} />
      <Text>设置页面</Text>
    </View>
  );
}
