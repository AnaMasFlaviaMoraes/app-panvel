import { StyleSheet } from "react-native";


export const cardItemStyle  = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
  },
  image: { width: 72, height: 72, borderRadius: 8, backgroundColor: "#f2f2f2" },
  center: { flex: 1, gap: 6 },
  name: { fontWeight: "600" },
  price: { fontWeight: "700", color: "#0b2b6b", textAlign: "center" },
  right: { alignItems: "flex-end", justifyContent: "space-between" },
  sub: { fontWeight: "700", color: "#222" },
  trashBtn: {
    marginTop: 8,
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#ffecec",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
