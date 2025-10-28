import React, { useEffect, useRef } from "react";
import {
    Animated,
    Image,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Product } from "../src/data/products";
import { globalStyles } from "../src/styles/global";
import { COLORS, SPACING } from "../src/styles/theme";

type Props = {
  visible: boolean;
  product: Product | null;
  qty?: number;
  onClose: () => void;
  onGoToCart: () => void;
  cartTotal: number;             // total atual do carrinho
  freeShippingThreshold?: number; // ex: 140.00
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
  const slideY = useRef(new Animated.Value(300)).current; // começa fora da tela

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
      {/* backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* sheet */}
      <Animated.View style={[styles.sheet, { transform: [{ translateY: slideY }] }]}>
        {/* header */}
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

        {/* frete grátis */}
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
              Você alcançou o frete grátis! 🎉
            </Text>
          )}

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>
        </View>

        {/* ações */}
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

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: SPACING.lg,
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  row: { flexDirection: "row", alignItems: "center", flex: 1 },
  thumb: { width: 36, height: 56, borderRadius: 6, backgroundColor: "#fff" },
  title: { fontWeight: "800", fontSize: 16, color: COLORS.textDark },
  subtitle: { color: COLORS.textGray, marginTop: 2 },
  freeText: { marginTop: 4, color: COLORS.textDark },
  progressTrack: {
    height: 8,
    backgroundColor: "#E7E9EF",
    borderRadius: 6,
    overflow: "hidden",
    marginTop: 8,
  },
  progressFill: {
    height: 8,
    backgroundColor: "#10a94a",
  },
  actions: { marginTop: 16, gap: 10 },
});
