import { View } from "react-native";

export default function LoadingBar() {
  return (
    <View style={{width: 309, height: 8, backgroundColor: "white", marginBottom: 60}}>
      <View style={{width: 103, height: 8, backgroundColor: "#7b6dd1"}}></View>
    </View>
  );
}