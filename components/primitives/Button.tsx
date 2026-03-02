import { Pressable, Text, ViewStyle } from "react-native";

type ButtonSize = "small" | "medium" | "large";

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  small: { width: 180, height: 40 },
  medium: { width: 240, height: 40 },
  large: { width: 310, height: 40 },
};

type ButtonProps = {
  text: string;
  size?: ButtonSize;
  onPress?: () => void;
  className?: string;
};

export function Button({
  text,
  size = "medium",
  onPress,
  className = "",
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={sizeStyles[size]}
      className={`mt-4 items-center justify-center rounded-full bg-[#EA8B43] ${className}`}
    >
      <Text className="text-center text-lg font-bold text-white">{text}</Text>
    </Pressable>
  );
}
