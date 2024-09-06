import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ContainerConteudo() {
  return (
    <View
      style={{
        width: 332,
        height: 180,
        backgroundColor: "white",
        borderRadius: 16,
        borderColor: "#7b6dd1",
        borderWidth: 1,
        padding: 20,
        marginTop: 30,
        alignItems: "center",
      }}
    >

      <View style={{ position: 'absolute', top: -15, marginLeft: 260}}>
        <Image source={require('@/assets/images/mark_book.png')}/>
      </View>
      <View>[Image]</View>

      <View
        style={{
          width: 332,
          height: 22,
          backgroundColor: "#e2e1ff",
          borderColor: "#7b6dd1",
          borderWidth: 1,
          marginTop: 120,
          padding: 5,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#7b6dd1", fontSize: 12, textAlign: "right" }}>
          [Content] • [TimeContent]
        </Text>
      </View>

      <TouchableOpacity>
        <View
          style={{
            width: 332,
            height: 70,
            backgroundColor: "#7b6dd1",

            padding: 5,
            justifyContent: "center",
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            [ContentTitle]
          </Text>
          <View style={{ position: "absolute", marginLeft: 280 }}>
            <Image source={require("@/assets/images/arrow_left.png")} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
