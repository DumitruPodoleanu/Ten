import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* This tells the root stack to hide its header for everything */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
