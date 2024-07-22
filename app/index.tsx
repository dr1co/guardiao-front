import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import TelaPerfil from "./screens/TelaPerfil";
import TelaPerfilResponsavel from "./screens/TelaPerfilResponsavel";


export default function Index() {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TelaPerfil />
        <TelaPerfilResponsavel />
      </View>
    </NavigationContainer>
  );
}
