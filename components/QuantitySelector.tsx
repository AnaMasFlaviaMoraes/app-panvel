import { Text, TouchableOpacity, View } from "react-native";
import { quantitySelectorStyle as styles } from "../src/styles/quantitySelector";
type Props = { value: number; onDec: () => void; onInc: () => void };

export default function QuantitySelector({ value, onDec, onInc }: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.btn} onPress={onDec}><Text style={styles.btnTxt}>−</Text></TouchableOpacity>
      <Text style={styles.qty}>{value}</Text>
      <TouchableOpacity style={styles.btn} onPress={onInc}><Text style={styles.btnTxt}>+</Text></TouchableOpacity>
    </View>
  );
}


