import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AddToCartToast from "../../components/AddCartToast";
import { brl, useCart } from "../../src/context/CartContext";
import { PRODUCTS } from "../../src/data/products";
import { productDetail as styles } from "../../src/styles/pages";

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


