import { View, Text, StyleSheet } from "react-native";
import InputName from "@/components/InputName";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48080",
  },
});

export default function Index() {
  return (
    <View style={styles.screen}>
      <InputName
        imagePath={require("@/assets/images/mail.svg")}
        placeholder="Digite o nome da criança."
        borderBottomColor="#f48080"
        placeholderTextColor="#f48080"
      />
    </View>
  );
}
