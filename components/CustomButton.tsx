import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

// criando estilos para cada parte do componente
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000000",
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 15,
    color: 'white'
  }
});

// criando tipo das propriedades
type ButtonParameters = {
  backgroundColor: string,
  title: string,
  text: string
}

// criando estrutura do botão com as propriedades variáveis
const CustomButton = (props: ButtonParameters) => {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: props.backgroundColor,  width: 340, height: 190}}
      >
        
        <Text style={styles.text}>{props.title}</Text>
        <View style={{height: 1, width: 311, backgroundColor: "white"}}></View>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;