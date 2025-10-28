import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CartItemRow from "../../components/CartItemRow";
import { brl, useCart } from "../../src/context/CartContext";

export default function CartScreen() {
  const { items, inc, dec, remove, total } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(it) => it.product.id}
        renderItem={({ item }) => (
          <CartItemRow
            item={item}
            onInc={() => inc(item.product.id)}
            onDec={() => dec(item.product.id)}
            onRemove={() => remove(item.product.id)}
          />
        )}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 40 }}>Seu carrinho está vazio.</Text>}
      />
      <View style={styles.footer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{brl(total)}</Text>
        </View>
        <Button title="Entrega →" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:"#f6f7f9" },
  footer:{
    position:"absolute", left:0, right:0, bottom:0,
    padding:16, flexDirection:"row", alignItems:"center", gap:12,
    backgroundColor:"#0b2b6b",
  },
  totalLabel:{ color:"#c9d6ff", fontSize:12 },
  totalValue:{ color:"#fff", fontSize:20, fontWeight:"800" },
});
