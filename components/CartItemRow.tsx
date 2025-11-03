import { Trash2 } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CartItem, brl } from "../src/context/CartContext";
import { cardItemStyle as styles } from "../src/styles/cardItem";
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
      <Image
        source={{ uri: item.product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.center}>
        <Text numberOfLines={2} style={styles.name}>
          {item.product.name}
        </Text>
        <View style={styles.bottomRow}>
          <QuantitySelector value={item.qty} onDec={onDec} onInc={onInc} />
          <Text style={styles.price}>{brl(item.product.price)}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.sub}>{brl(subtotal)}</Text>
        <TouchableOpacity
          onPress={onRemove}
          style={styles.trashBtn}
          hitSlop={8}
        >
          <Trash2 size={20} color="#0b2b6b" strokeWidth={2.2} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

