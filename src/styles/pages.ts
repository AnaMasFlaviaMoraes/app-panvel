import { StyleSheet } from "react-native";

const FOOTER_HEIGHT = 64;

export const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f9",
    position: "relative",
    justifyContent: "flex-end"
  },

  content:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1b1b1b",
  },

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
    height: FOOTER_HEIGHT,
    backgroundColor: "#0b2b6b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    zIndex: 999,
    elevation: 10,
  },
  footerLabel: {
    color: "#d7e0ff",
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

export const productDetail = StyleSheet.create({
  container: { paddingBottom: 24, backgroundColor: "#fff" },
  image: { width: "100%", height: 320, backgroundColor: "#fff" },

  box: { padding: 16, gap: 12 },
  name: { fontSize: 18, fontWeight: "700", color: "#1b1b1b" },

  priceRow: { flexDirection: "row", alignItems: "center", gap: 8, justifyContent: "center" },
  price: { fontSize: 22, fontWeight: "800", color: "#0b2b6b", textAlign: "center", alignItems: "center" , justifyContent: "center"},
  badge: { backgroundColor: "#ffe9d6", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, textAlign:"center" },
  badgeTxt: { color: "#f17600", fontWeight: "700" },

  desc: { color: "#555", lineHeight: 20 },

  qtyWrap: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f4f6f8",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  qtyBtn: {
    width: 36, height: 36, borderRadius: 18,
    alignItems: "center", justifyContent: "center",
  },
  qtyBtnTxt: { fontSize: 22, fontWeight: "800", color: "#8a8f98" },
  qtyValue: { fontSize: 16, fontWeight: "700", color: "#2b2f38" },

  cta: {
    marginTop: 10,
    backgroundColor: "#0b2b6b",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaTxt: { color: "#fff", fontSize: 16, fontWeight: "700" },
});

export const list = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f9" },
  col: { flex: 1 },
  cartBtn: { paddingLeft: 8, paddingRight: 2 },
  badge: {
    position: "absolute",
    top: -4,
    right: -2,
    backgroundColor: "#0a66ff",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: { color: "#fff", fontSize: 11, fontWeight: "700" },
});

