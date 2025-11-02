import { useRouter } from "expo-router";
import { Trash2 } from "lucide-react-native";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartItemRow from "../../components/CartItemRow";
import { useCart } from "../../src/context/CartContext";

export default function CartScreen() {
  const { items, inc, dec, remove, clear, total } = useCart();
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* header apenas com título */}
      <View style={styles.header}>
        <Text style={styles.title}>Minha cesta</Text>
      </View>

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
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 4,
          paddingBottom: 500, // 👈 espaço para o footer aparecer
          gap: 12,
        }}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            Sua cesta está vazia.
          </Text>
        }
        // ⬇️ footer: aparece só se tiver itens
        ListFooterComponent={
          items.length > 0 ? (
            <TouchableOpacity style={styles.clearBtn} onPress={clear}>
              <Trash2 size={18} color="#c1272d" />
              <Text style={styles.clearTxt}>Esvaziar minha cesta</Text>
            </TouchableOpacity>
          ) : null
        }
      />

      {/* tarja azul fixa */}
      <View style={styles.footerBar}>
        <View style={{ flex: 1 }}>
          <Text style={styles.footerLabel}>Total</Text>
          <Text style={styles.footerValue}>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.footerBtn}
          onPress={() => router.push("/products")}
          activeOpacity={0.9}
        >
          <Text style={styles.footerBtnTxt}>Entrega →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f9" },

  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: { fontSize: 20, fontWeight: "700", color: "#1b1b1b" },

  clearBtn: {
    marginTop: 4,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  clearTxt: {
    color: "#c1272d",
    fontWeight: "600",
  },

  footerBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0b2b6b",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  footerLabel: {
    color: "#c9d6ff",
    fontSize: 12,
  },
  footerValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },
  footerBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
  },
  footerBtnTxt: {
    color: "#0b2b6b",
    fontWeight: "700",
    fontSize: 15,
  },
});
