import { Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";

export default function Layout () {
  return (
    <View className="flex-1 bg-black">
      <Stack screenOptions={{
        statusBarStyle: "light",
        statusBarColor: "#000",
        contentStyle: {
          backgroundColor: "#000"
        },
        headerTintColor: "#fc0",
        headerStyle: {backgroundColor: "#000"},
        headerTitle: "",
        header: ()=> <Logo/>
        
      }}/>
    </View>
  )
}