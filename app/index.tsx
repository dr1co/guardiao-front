import { View, StyleSheet } from "react-native";
import TelaPerfil from "./conectar";


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
