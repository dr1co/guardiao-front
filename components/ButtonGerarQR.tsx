import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Modal } from "react-native";
import QRCode from "react-native-qrcode-svg";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f480d4",
    borderRadius: 16,
    width: 332,
    height: 66,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe1f0",
  },

  text: {
    color: "white",
    fontFamily: "B612 Mono, monospace",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default function ButtonGerarQR() {
  const [displayQRCode, setDisplayQRCode] = useState(false);

  const handlePress = () => {
    setDisplayQRCode(!displayQRCode);
  };

  return (
    <View>
      {displayQRCode && (
        <Modal transparent={true}>
          <View style={styles.modal}>
            <QRCode value="https://google.com" size={250} />
            <TouchableOpacity style={{...styles.button, marginTop: 50}} onPress={handlePress}>
              <Text style={styles.text}>{"OCULTAR QR CODE"}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{"EXIBIR QR CODE"}</Text>
      </TouchableOpacity>
    </View>
  );
}
