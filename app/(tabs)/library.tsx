import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Library() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold">Library Screen</Text>
    </SafeAreaView>
  );
}
