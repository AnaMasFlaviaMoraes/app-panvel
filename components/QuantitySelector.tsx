import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  btn: {
    width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: "#d9d9d9",
    alignItems: "center", justifyContent: "center",
  },
  btnTxt: { fontSize: 22, fontWeight: "700" },
  qty: { minWidth: 24, textAlign: "center", fontSize: 16, fontWeight: "700" },
});
