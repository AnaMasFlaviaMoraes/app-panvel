import { StyleSheet } from "react-native";

const FOOTER_HEIGHT = 64;

export const cartStyles = StyleSheet.create({
  // esse aqui é o que faz o absolute funcionar
  screen: {
    flex: 1,
    backgroundColor: "#f6f7f9",
    position: "relative",   // 👈 MUITO importante
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

  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: FOOTER_HEIGHT + 70, // 👈 dá espaço pro footer
    gap: 12,
  },

  clearBtn: {
    marginTop: 4,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
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
    paddingHorizontal: 16,
    gap: 16,
    zIndex: 999,     // pra ficar por cima do FlatList
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
