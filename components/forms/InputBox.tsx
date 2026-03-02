import { Text, TextInput, View } from "react-native";

type InputProps = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  className?: string;
  placeholder: string;
};

export function Input({
  label,
  value,
  onChangeText,
  className = "",
  placeholder,
}: InputProps) {
  return (
    <View className={`mt-4 w-[310px] flex-col ${className}`}>
      <Text className="mb-1 text-body font-bold text-textPrimary">{label}</Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.6)"
        className="h-[40px] w-full rounded-lg border border-borderColor bg-[#ffffff] px-4 text-body text-black"
      />
    </View>
  );
}
