import { View, StyleSheet } from "react-native";
import TelaPerfil from "./screens/TelaPerfil";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TelaPerfil />
    </View>
  );
}
