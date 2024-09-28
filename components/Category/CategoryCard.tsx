import { Image, Text, View } from "react-native";

export function CategoryCard({ category }) {
  return (
    <View className="bg-gray-900 px-5 py-2 rounded-lg w-[300] h-[200] mr-2" >
      <Image
        source={{ uri: category.item.strCategoryThumb }}
        width={100}
        height={80}
        resizeMode="center"
      />
      <Text className="text-white text-xl font-extrabold">
        {category.item.strCategory}
      </Text>
      <Text className="text-white">
        {category.item.strCategoryDescription.slice(0, 90)}...
      </Text>
    </View>
  );
}