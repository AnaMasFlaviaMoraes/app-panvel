import { StyleSheet } from "react-native";
import { SPACING } from "../styles/theme";

export const addCardToastStyle= StyleSheet.create({
 backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: SPACING.lg,
    gap: 12,
    maxHeight: "75%", 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  row: { flexDirection: "row", alignItems: "center", flex: 1 },
  thumb: { width: 36, height: 56 },
  title: { fontWeight: "800", fontSize: 16 },
  subtitle: { color: "#666", marginTop: 2 },

  freeText: { marginTop: 4, color: "#222" },
  progressTrack: {
    height: 8,
    backgroundColor: "#E7E9EF",
    borderRadius: 6,
    overflow: "hidden",
    marginTop: 8,
  },
  progressFill: {
    height: 8,
    backgroundColor: "#10a94a",
  },

  actions: { gap: 10, marginTop: 4 },
  primary: {
    backgroundColor: "#0b2b6b",
    borderRadius: 10,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryTxt: { color: "#fff", fontWeight: "700" },
  outline: {
    borderWidth: 2,
    borderColor: "#0b2b6b",
    borderRadius: 10,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineTxt: { color: "#0b2b6b", fontWeight: "700" },
});
