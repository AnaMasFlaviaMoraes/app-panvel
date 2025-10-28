import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../src/context/CartContext";
import { Product } from "../src/data/products";

type Props = { product: Product; variant?: "grid" | "list" };

export default function ProductCard({ product, variant = "grid" }: Props) {
  const { add } = useCart();

  // preço “de” calculado a partir do badge (se existir), ex.: -17% => price/(1-0.17)
  const pct =
    product.badge && product.badge.includes("%")
      ? Math.max(
          0,
          Math.min(0.9, parseInt(product.badge.replace(/[^\d]/g, ""), 10) / 100)
        )
      : 0;
  const fromPrice = pct ? product.price / (1 - pct) : 0;

  // marca: usa product.brand ou último termo do nome (ex.: "... Panvel 90ML" -> "PANVEL")
  const brand =
    product.brand ||
    product.name
      .split(" ")
      .slice(-1)[0]
      .replace(/\W+/g, "")
      .toUpperCase();

  return (
    <View style={[styles.card, variant === "grid" && styles.cardGrid]}>
      {/* imagem + link */}
      <Link href={`/product/${product.id}`} asChild>
        <TouchableOpacity activeOpacity={0.85}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Link>

      {/* badge de desconto */}
      {product.badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeTxt}>{product.badge}</Text>
        </View>
      ) : null}

      {/* botão de cesta flutuante */}
      <TouchableOpacity
        onPress={() => add(product, 1)}
        style={styles.fab}
        activeOpacity={0.9}
        accessibilityLabel="Adicionar à cesta"
      >
        <Text style={{ fontSize: 16 }}>🧺</Text>
      </TouchableOpacity>

      {/* infos */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.brand}>{brand}</Text>

        <View style={styles.priceBlock}>
          {fromPrice ? (
            <Text style={styles.fromPrice}>
              {fromPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2,
              })}
            </Text>
          ) : (
            <View style={{ height: 18 }} />
          )}
          <Text style={styles.price}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
      </View>
    </View>
  );
}

const borderBlue = "#E7EEFA";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: borderBlue,
    overflow: "hidden",
  },
  cardGrid: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 140,
    backgroundColor: "#fff",
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#FFE9D6",
    borderRadius: 6,
  },
  badgeTxt: { color: "#F17600", fontWeight: "700", fontSize: 12 },

  fab: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: borderBlue,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
  },

  info: { paddingHorizontal: 12, paddingVertical: 10, gap: 4 },
  name: { fontSize: 13.5, fontWeight: "600", color: "#1b1b1b" },
  brand: { fontSize: 12, fontWeight: "800", color: "#5772A3" },

  priceBlock: { marginTop: 6 },
  fromPrice: {
    color: "#9AA6BF",
    textDecorationLine: "line-through",
    fontSize: 13,
    marginBottom: 2,
  },
  price: { color: "#0b2b6b", fontSize: 20, fontWeight: "800" },
});