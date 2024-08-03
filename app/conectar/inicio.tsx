import { View, useWindowDimensions, Image } from "react-native";

export default function TelaInicio() {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        width,
        height,
        flex: 1,
        alignItems: "center",
        backgroundColor: "#7b6dd1",
      }}
    >
      <View>
        <Image source={require("@/assets/images/logo.svg")} />
      </View>
    </View>
  );
}
