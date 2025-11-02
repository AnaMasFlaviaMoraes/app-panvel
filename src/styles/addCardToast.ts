import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../styles/theme";


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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  row: { flexDirection: "row", alignItems: "center", flex: 1 },
  thumb: { width: 36, height: 56, borderRadius: 6, backgroundColor: "#fff" },
  title: { fontWeight: "800", fontSize: 16, color: COLORS.textDark },
  subtitle: { color: COLORS.textGray, marginTop: 2 },
  freeText: { marginTop: 4, color: COLORS.textDark },
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
  actions: { marginTop: 16, gap: 10 },
});
