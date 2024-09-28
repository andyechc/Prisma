import { FlatList, View } from "react-native";
import { CategoryCard } from "./Category/CategoryCard";
const categories = require("../lib/categories.json").categories;

export default function App() {
  return (
    <View className="px-2 py-2 bg-black flex-1">
      <FlatList
        data={categories}
        renderItem={(category) => <CategoryCard category={category} />}
        className=""
        horizontal
      />
    </View>
  );
}
