import { StyleSheet } from "react-native";

const borderBlue = "#E7EEFA";

export const productCardStyles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 14,
        borderWidth: 1,
        borderColor: borderBlue,
        overflow: "hidden",
    },
    cardGrid: { width: "100%" },
    image: {
        width: "100%",
        height: 140,
        backgroundColor: "#fff",
    },
    fab: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: borderBlue,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    info: { paddingHorizontal: 12, paddingVertical: 10, gap: 4 },
    name: { fontSize: 13.5, fontWeight: "600", color: "#1b1b1b" },
    brand: {
        fontSize: 12,
        fontWeight: "800",
        color: "#5772A3",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    topPriceRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 4,
        justifyContent: "center",
    },
    fromPrice: {
        color: "#9AA6BF",
        textDecorationLine: "line-through",
        fontSize: 13,
    },
    badge: {
        backgroundColor: "#FFE9D6",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
    },
    badgeTxt: { color: "#F17600", fontWeight: "700", fontSize: 12 },
    price: {
        marginTop: 2,
        color: "#0b2b6b",
        fontSize: 20,
        fontWeight: "800",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
});
