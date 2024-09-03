import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f48080',
    borderRadius: 16,
    width: 332,
    height: 66,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },

  text: {
    color: 'white',
    fontFamily: 'B612 Mono, monospace',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default function ButtonEscanear() {
  const [displayScanner, setDisplayScanner] = useState(false);

  const handlePress = () => {
    setDisplayScanner(!displayScanner);
  }

  return (
    <View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>ESCANEAR QR CODE</Text>
        </TouchableOpacity>
    </View>
  );
}
