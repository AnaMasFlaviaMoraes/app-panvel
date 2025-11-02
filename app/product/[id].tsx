import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddToCartToast from "../../components/AddCartToast";
import { brl, useCart } from "../../src/context/CartContext";
import { PRODUCTS } from "../../src/data/products";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id)!;
  const { add, total } = useCart();
  const [qty, setQty] = useState(1);
  const [toastOpen, setToastOpen] = useState(false);
  const router = useRouter();

  const inc = () => setQty((n) => n + 1);
  const dec = () => setQty((n) => Math.max(1, n - 1));

  const handleAdd = () => {
    add(product, qty);
    setToastOpen(true);
  };

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />

      <View style={styles.box}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{brl(product.price)}</Text>
          {product.badge ? (
            <View style={styles.badge}><Text style={styles.badgeTxt}>{product.badge}</Text></View>
          ) : null}
        </View>

        <Text style={styles.desc}>{product.description}</Text>

        <View style={styles.qtyWrap}>
          <TouchableOpacity onPress={dec} style={styles.qtyBtn}><Text style={styles.qtyBtnTxt}>−</Text></TouchableOpacity>
          <Text style={styles.qtyValue}>{qty}</Text>
          <TouchableOpacity onPress={inc} style={styles.qtyBtn}><Text style={styles.qtyBtnTxt}>+</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cta} activeOpacity={0.9}onPress={handleAdd}>
          <Text style={styles.ctaTxt}>Adicionar à cesta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

     <AddToCartToast
        visible={toastOpen}
        product={product}
        qty={qty}
        onClose={() => setToastOpen(false)}
        onGoToCart={() => {
          setToastOpen(false);
          router.push("/cart");
        }}
        cartTotal={total}
        freeShippingThreshold={140}
      />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 24, backgroundColor: "#fff" },
  image: { width: "100%", height: 320, backgroundColor: "#fff" },

  box: { padding: 16, gap: 12 },
  name: { fontSize: 18, fontWeight: "700", color: "#1b1b1b" },

  priceRow: { flexDirection: "row", alignItems: "center", gap: 8, justifyContent: "center" },
  price: { fontSize: 22, fontWeight: "800", color: "#0b2b6b", textAlign: "center", alignItems: "center" , justifyContent: "center"},
  badge: { backgroundColor: "#ffe9d6", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, textAlign:"center" },
  badgeTxt: { color: "#f17600", fontWeight: "700" },

  desc: { color: "#555", lineHeight: 20 },

  qtyWrap: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4f6f8",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  qtyBtn: {
    width: 36, height: 36, borderRadius: 18,
    alignItems: "center", justifyContent: "center",
  },
  qtyBtnTxt: { fontSize: 22, fontWeight: "800", color: "#8a8f98" },
  qtyValue: { fontSize: 16, fontWeight: "700", color: "#2b2f38" },

  cta: {
    marginTop: 10,
    backgroundColor: "#0b2b6b",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaTxt: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
