import { StyleSheet } from "react-native";


export const quantitySelectorStyle = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  btn: {
    width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: "#d9d9d9",
    alignItems: "center", justifyContent: "center",
  },
  btnTxt: { fontSize: 22, fontWeight: "700" },
  qty: { minWidth: 24, textAlign: "center", fontSize: 16, fontWeight: "700" },
});