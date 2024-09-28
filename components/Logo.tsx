import { Image, Text, View } from "react-native";
const logo = require("../assets/icon.png")

export function Logo () {
  return (
    <View className="flex-row items-center">
      <Image
        source={logo}
        className="w-[60] h-[60]"
        resizeMode="center"
      />
      <Text className="text-[#ffd562] text-2xl font-extrabold">Prisma</Text>
    </View>
  )
}