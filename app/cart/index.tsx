import { useRouter } from "expo-router";
import { Trash2 } from "lucide-react-native";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItemRow from "../../components/CartItemRow";
import { useCart } from "../../src/context/CartContext";
import { cartStyles as styles } from "../../src/styles/pages";

const FOOTER_HEIGHT = 64;

export default function CartScreen() {
  const { items, inc, dec, remove, clear, total } = useCart();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
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
          paddingBottom: FOOTER_HEIGHT + 24,
          gap: 12,
        }}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            Sua cesta está vazia.
          </Text>
        }
        ListFooterComponent={
          items.length > 0 ? (
            <TouchableOpacity style={styles.clearBtn} onPress={clear}>
              <Trash2 size={18} color="#c1272d" />
              <Text style={styles.clearTxt}>Esvaziar minha cesta</Text>
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
    { items.length > 0 ? (
      <View style={[styles.footerBar, { paddingBottom: 4 }]}>
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
     ) : null }
        
    </SafeAreaView>
  );
}

