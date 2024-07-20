import { View, Text, Image, useWindowDimensions } from "react-native";

export default function Logo() {
  const { width, height } = useWindowDimensions();


  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width,
        padding: 10,
        justifyContent: "space-between"

      }}
    >
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Image source={require("@/assets/images/logo.png")} />
        <View>
          <Text
            style={{
              color: "white",
              fontFamily: '"B612 Mono", monospace',
              fontWeight: "bold",
            }}
          >
            Guardião
          </Text>
        </View>
      </View>

      <View>
        <Image source={require("@/assets/images/Logout.png")} />
      </View>
    </View>
  );
}