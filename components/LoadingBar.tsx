import { View } from "react-native";
import { StyleSheet } from "react-native";

type LoadingParameters = {
  width: number;
}

export default function LoadingBar(props: LoadingParameters) {
  return (
    <View style={{width: 309, height: 8, backgroundColor: "white", marginBottom: 60}}>
      <View style={{width: props.width, height: 8, backgroundColor: "#7b6dd1"}}></View>
    </View>
  );
}