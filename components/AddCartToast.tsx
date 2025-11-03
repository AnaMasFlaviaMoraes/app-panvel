import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Product } from "../src/data/products";
import { addCardToastStyle as styles } from "../src/styles/addCardToast";
import { globalStyles } from "../src/styles/global";
import { COLORS } from "../src/styles/theme";

type Props = {
  visible: boolean;
  product: Product | null;
  qty?: number;
  onClose: () => void;
  onGoToCart: () => void;
  cartTotal: number;             
  freeShippingThreshold?: number; 
};

export default function AddToCartToast({
  visible,
  product,
  qty = 1,
  onClose,
  onGoToCart,
  cartTotal,
  freeShippingThreshold = 140,
}: Props) {
  const slideY = useRef(new Animated.Value(300)).current; 

  useEffect(() => {
    Animated.timing(slideY, {
      toValue: visible ? 0 : 300,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [visible, slideY]);

  if (!product) return null;

  const remaining = Math.max(0, freeShippingThreshold - cartTotal);
  const progress =
    Math.max(0, Math.min(1, cartTotal / freeShippingThreshold));

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <Animated.View style={[styles.sheet, { transform: [{ translateY: slideY }] }]}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Image source={{ uri: product.image }} style={styles.thumb} resizeMode="contain" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.title}>Produto adicionado à cesta! ✓</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                {product.name} {qty > 1 ? `× ${qty}` : ""}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose} hitSlop={10}>
            <Text style={{ fontSize: 18, color: COLORS.textGray }}>✕</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          {remaining > 0 ? (
            <Text style={styles.freeText}>
              <Text style={{ color: "#10a94a", fontWeight: "700" }}>Tenha frete grátis</Text>
              {` comprando mais ${remaining.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}
            </Text>
          ) : (
            <Text style={[styles.freeText, { color: "#10a94a", fontWeight: "700" }]}>
              Você alcançou o frete grátis! 
            </Text>
          )}

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={globalStyles.buttonPrimary} onPress={onClose} activeOpacity={0.9}>
            <Text style={globalStyles.buttonPrimaryText}>Continuar comprando</Text>
          </TouchableOpacity>

          <TouchableOpacity style={globalStyles.buttonOutline} onPress={onGoToCart} activeOpacity={0.9}>
            <Text style={globalStyles.buttonOutlineText}>Ir para minha cesta</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
}

