import { View, Text } from "react-native";

export default function SubTitle() {
  return (
    <View style={{
      marginBottom: 60,
    }}>
      <Text style={{fontSize: 20, color: "#888888", fontWeight: "500", fontFamily: 'IBM Plex Sans'}}>Este dispositivo pertence a quem?</Text>
    </View>
  );
}