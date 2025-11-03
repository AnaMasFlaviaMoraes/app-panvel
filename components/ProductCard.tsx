import { Link } from "expo-router";
import { ShoppingCart } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../src/context/CartContext";
import { Product } from "../src/data/products";
import { productCardStyles as styles } from "../src/styles/productCard";

type Props = {
  product: Product;
  variant?: "grid" | "list";
  onAddToCart?: (product: Product) => void;  
};

export default function ProductCard({ product, variant = "grid", onAddToCart }: Props) {
  const { add } = useCart();
  const pct =
    product.badge && product.badge.includes("%")
      ? Math.max(
          0,
          Math.min(0.9, parseInt(product.badge.replace(/[^\d]/g, ""), 10) / 100)
        )
      : 0;
  const fromPrice = pct ? product.price / (1 - pct) : 0;

  const brand =
    product.brand ||
    product.name
      .split(" ")
      .slice(-1)[0]
      .replace(/\W+/g, "")
      .toUpperCase();

  const handleAdd = () => {
    add(product, 1);            
    onAddToCart?.(product);      
  };

  return (
    <View style={[styles.card, variant === "grid" && styles.cardGrid]}>
      <Link href={`/product/${product.id}`} asChild>
        <TouchableOpacity activeOpacity={0.85}>
          <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
      </Link>
      <TouchableOpacity onPress={handleAdd} style={styles.fab} activeOpacity={0.9}>
        <ShoppingCart color="#0b2b6b" size={18} />
      </TouchableOpacity>

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{brand}</Text>

        {fromPrice ? (
          <View style={styles.topPriceRow}>
            <Text style={styles.fromPrice}>
              {fromPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </Text>
            {product.badge ? (
              <View style={styles.badge}>
                <Text style={styles.badgeTxt}>{product.badge}</Text>
              </View>
            ) : null}
          </View>
        ) : (
          <View style={{ height: 18 }} />
        )}

        <Text style={styles.price}>
          {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </Text>
      </View>
    </View>
  );
}
