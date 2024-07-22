import { View, Text } from "react-native";

export default function Title() {
  return (
    <View style= {{
      marginBottom: 30,
      marginTop: 60,
      width: 293,
      height: 96
    }}>
      <Text style={{fontSize: 24, lineHeight: 48, fontFamily: 'IBM Plex Sans', color: "#7b6dd1", fontWeight: "bold"}}>Seu <Text style={{color: "#8093f4", fontFamily: '"B612 Mono", monospace', fontWeight: "bold"}}>Guardião</Text> não foi configurado ainda.</Text>
    </View>
  );
}