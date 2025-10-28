import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../src/context/CartContext";
import { PRODUCTS } from "../../src/data/products";

export default function ProductsScreen() {
  const { count } = useCart();
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions?.({
      headerRight: () => (
        <TouchableOpacity style={{ paddingLeft: 8, paddingRight: 2 }} onPress={() => router.push("/cart")}>
          <Text style={{ fontSize: 22 }}>🧺</Text>
          {count > 0 && (
            <View style={{
              position:"absolute", top:-4, right:-2, backgroundColor:"#0a66ff",
              borderRadius:10, paddingHorizontal:6, paddingVertical:2
            }}>
              <Text style={{ color:"#fff", fontSize:12, fontWeight:"700" }}>{count}</Text>
            </View>
          )}
        </TouchableOpacity>
      ),
    });
  }, [count, navigation, router]);

  return (
    <View style={styles.container}>
     <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
         key={"grid-2"} 
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.col}>
            <ProductCard product={item} variant="grid" />
          </View>
        )}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 12, paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f9" },
  col: { flex: 1 },
});
