import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartItem, brl } from "../src/context/CartContext";
import QuantitySelector from "./QuantitySelector";

type Props = {
  item: CartItem;
  onInc: () => void;
  onDec: () => void;
  onRemove: () => void;
};

export default function CartItemRow({ item, onInc, onDec, onRemove }: Props) {
  const subtotal = item.product.price * item.qty;
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.product.image }} style={styles.image} resizeMode="contain"/>
      <View style={styles.center}>
        <Text numberOfLines={2} style={styles.name}>{item.product.name}</Text>
        <Text style={styles.price}>{brl(item.product.price)}</Text>
        <QuantitySelector value={item.qty} onDec={onDec} onInc={onInc} />
      </View>
      <View style={styles.right}>
        <Text style={styles.sub}>{brl(subtotal)}</Text>
        <TouchableOpacity onPress={onRemove}><Text style={styles.remove}>Remover</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 12, padding: 12, backgroundColor: "#fff", borderRadius: 12, marginBottom: 12, elevation: 1 },
  image: { width: 72, height: 72, borderRadius: 8, backgroundColor: "#f2f2f2" },
  center: { flex: 1, gap: 6 },
  name: { fontWeight: "600" },
  price: { fontWeight: "700" },
  right: { alignItems: "flex-end", justifyContent: "space-between" },
  sub: { fontWeight: "700" },
  remove: { color: "#c1272d", marginTop: 8 },
});
