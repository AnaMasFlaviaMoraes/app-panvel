import { useNavigation, useRouter } from "expo-router";
import { ShoppingCart } from "lucide-react-native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddToCartToast from "../../components/AddCartToast";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../src/context/CartContext";
import { PRODUCTS } from "../../src/data/products";

export default function ProductsScreen() {
  const { count, total } = useCart();
  const router = useRouter();
  const navigation = useNavigation();

  // estado do toast
  const [toastOpen, setToastOpen] = useState(false);
  const [lastProduct, setLastProduct] = useState<any>(null);

  useEffect(() => {
    navigation.setOptions?.({
      headerRight: () => (
        <TouchableOpacity style={styles.cartBtn} onPress={() => router.push("/cart")} activeOpacity={0.8}>
          <ShoppingCart color="#0b2b6b" size={22} />
          {count > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeTxt}>{count}</Text>
            </View>
          )}
        </TouchableOpacity>
      ),
      title: "Beleza",
    });
  }, [count, navigation, router]);

  // quando um card adicionar
  const handleCardAdd = (product: any) => {
    setLastProduct(product);
    setToastOpen(true);
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          key={"grid-2"}
          data={PRODUCTS}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.col}>
              <ProductCard product={item} variant="grid" onAddToCart={handleCardAdd} />
            </View>
          )}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ padding: 12, paddingBottom: 24 }}
        />
      </View>

      <AddToCartToast
        visible={toastOpen}
        product={lastProduct}
        qty={1}
        cartTotal={total}
        freeShippingThreshold={140}
        onClose={() => setToastOpen(false)}
        onGoToCart={() => {
          setToastOpen(false);
          router.push("/cart");
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f9" },
  col: { flex: 1 },
  cartBtn: { paddingLeft: 8, paddingRight: 2 },
  badge: {
    position: "absolute",
    top: -4,
    right: -2,
    backgroundColor: "#0a66ff",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: { color: "#fff", fontSize: 11, fontWeight: "700" },
});
