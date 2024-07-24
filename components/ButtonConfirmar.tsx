import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f48080',
    borderRadius: 16,
    width: 332,
    height: 66,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'white',
    fontFamily: 'B612 Mono, monospace',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

type ButtonParameters = {
  backgroundColor: string;
}

export default function ButtonConfirmar(props: ButtonParameters) {
  return (
    <View>
      <TouchableOpacity style={{...styles.button, backgroundColor: props.backgroundColor}}>
        <Text style={styles.text}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
}
