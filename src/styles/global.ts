import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "./theme";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgLight,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },

  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm + 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonPrimaryText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
  },

  badge: {
    backgroundColor: COLORS.badgeBg,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    borderRadius: 6,
  },

  badgeText: {
    color: COLORS.accent,
    fontWeight: "700",
    fontSize: 12,
  },
 
  buttonOutline: {
    backgroundColor: "transparent",
    paddingVertical: SPACING.md,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});
