import { useState } from "react";
import { View, TouchableOpacity, Image, Modal, Text } from "react-native";

export default function ButtonsTop() {
  const [showModalUser, setModalUser] = useState(false);
  const [showModalNotifications, setModalNotifications] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 130,
      }}
    >
      <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          backgroundColor: "white",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => setModalNotifications(!showModalNotifications)}
      >
        <Image source={require("@/assets/images/bell.png")} />
        <Modal
          visible={showModalNotifications}
          animationType="fade"
          transparent={true}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
              width: 300,
              marginLeft: 50,
              marginTop: 75,
              alignItems: "center",
            }}
          >
            <View style={{ padding: 20, paddingLeft: 60, paddingRight: 60, borderRadius: 16, borderWidth: 3, borderColor: '#7b6dd1'}}>
              <Text
                style={{ fontSize: 18, color: "black", textAlign: "center" }}
              >
                Notificação
              </Text>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8,
        }}
        onPress={() => setModalUser(!showModalUser)}
      >
        <Image source={require("@/assets/images/user_photo.png")} />
        <Modal visible={showModalUser} animationType="fade" transparent={true}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
              width: 150,
              marginLeft: 300,
              marginTop: 75,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "red",
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Sair
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>
      <View></View>
    </View>
  );
}
