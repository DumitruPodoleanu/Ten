import { Input } from "@/components/forms/InputBox";
import { Button } from "@/components/primitives/Button";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold">Home Screen</Text>
      <Button
        text="Continue"
        size="large"
        onPress={() => console.log("Pressed")}
      />
      <Input label="Password" value="" placeholder="Enter text here"></Input>
    </SafeAreaView>
  );
}
