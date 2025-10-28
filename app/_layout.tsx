import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../src/context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="products/index" options={{ title: "Beleza" }} />
        <Stack.Screen name="product/[id]" options={{ title: "Detalhes do produto" }} />
        <Stack.Screen name="cart/index" options={{ title: "Minha cesta" }} />
      </Stack>
    </CartProvider>
  );
}
