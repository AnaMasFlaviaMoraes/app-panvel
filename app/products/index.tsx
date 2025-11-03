import { useNavigation, useRouter } from "expo-router";
import { ShoppingCart } from "lucide-react-native";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import AddToCartToast from "../../components/AddCartToast";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../src/context/CartContext";
import { PRODUCTS } from "../../src/data/products";
import { list as styles } from "../../src/styles/pages";

export default function ProductsScreen() {
  const { count, total } = useCart();
  const router = useRouter();
  const navigation = useNavigation();
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


