import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

export default function Logo() {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ width: 50, height: 50, resizeMode: "cover" }}
          source={require("@/assets/images/logo.png")}
        />
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 2,
            paddingBottom: 2,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: '"B612 Mono", monospace',
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Guardião
          </Text>
        </View>
      </View>

      <View>
        <Link href={'/'}>
          <TouchableOpacity>
            <Image source={require("@/assets/images/Logout.png")} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
